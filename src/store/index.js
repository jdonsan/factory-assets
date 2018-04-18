import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const URL_RESOURCE = '/symbols'

export const ASSET_ACTIONS = {
  FETCH_ASSETS: 'fetchAssets',
}

export const ASSET_MUTATIONS = {
  SET_ERROR: 'setError',
  SET_ASSETS: 'setAssets',
  CHANGE_LOADING: 'changeLoading',
  ADD_COMMENT: 'addComment',
  DELETE_COMMENT: 'deleteComment',
  EDIT_COMMENT: 'editComment'
}

export default new Vuex.Store({
  state: {
    assetsKeyMap: {},
    loading: false,
    error: null
  },

  getters: {
    assets: (state) => (currency, riskFamily) => {
      let assetList = Object.values(state.assetsKeyMap)

      assetList = currency ? assetList.filter(asset => asset.currency === currency) : assetList
      assetList = riskFamily ? assetList.filter(asset => asset.risk_family === riskFamily) : assetList

      return assetList
    },

    assetById: (state) => (id) => state.assetsKeyMap[id],

    assetPrev: (state, getters) => (id) => {
      const assets = getters.assets()
      let index = assets.findIndex(asset => asset.id === id) - 1
      return (index === -1) ? null : assets[index].id
    },

    assetNext: (state, getters) => (id) => {
      const assets = getters.assets()
      let index = assets.findIndex(asset => asset.id === id) + 1
      return (index === assets.length) ? null : assets[index].id
    },

    currencies: (state, getters) => [...new Set(getters.assets().map(asset => asset.currency))],
    riskFamilies: (state, getters) => [...new Set(getters.assets().map(asset => asset.risk_family))]
  },

  mutations: {
    [ASSET_MUTATIONS.SET_ASSETS](state, assets) {
      const apiComments = api.fetchComments()

      if (!Array.isArray(assets)) {
        Vue.set(assets, 'comments', apiComments.getByAssetId(assets.id))
        Vue.set(state.assetsKeyMap, assets.id, assets)
      } else {
        state.assetsKeyMap = assets.reduce((keyMap, asset) => {
          Vue.set(asset, 'comments', apiComments.getByAssetId(asset.id))
          keyMap[asset.id] = asset
          return keyMap
        }, {})
      }
    },

    [ASSET_MUTATIONS.SET_ERROR](state, error) {
      state.error = error
    },

    [ASSET_MUTATIONS.CHANGE_LOADING](state, loading) {
      state.loading = loading
    },

    [ASSET_MUTATIONS.ADD_COMMENT](state, { assetId, comment }) {
      const commentItem = { date: new Date(), text: comment }

      api.fetchComments().save(assetId, commentItem)
      state.assetsKeyMap[assetId].comments.push(commentItem)
    },

    [ASSET_MUTATIONS.DELETE_COMMENT](state, { assetId, index }) {
      const comments = api.fetchComments()

      if (comments.getByAssetId(assetId).length !== 0) {
        comments.delete(assetId, index)
        state.assetsKeyMap[assetId].comments.splice(index, 1)
      }
    },

    [ASSET_MUTATIONS.EDIT_COMMENT](state, { assetId, index, text }) {
      const comments = api.fetchComments()

      if (comments.getByAssetId(assetId).length !== 0) {
        comments.edit(assetId, index, text)
        Vue.set(state.assetsKeyMap[assetId].comments[index], 'text', text)
      }
    }
  },

  actions: {
    async [ASSET_ACTIONS.FETCH_ASSETS]({ commit, state }, assetId) {
      try {
        if (assetId && state.assetsKeyMap[assetId] && state.assetsKeyMap[assetId].isin) {
          return true;
        }

        commit(ASSET_MUTATIONS.CHANGE_LOADING, true)
        const assets = await api.fetchAssets(assetId)
        commit(ASSET_MUTATIONS.SET_ASSETS, assets)
      } catch (error) {
        console.error(error)
        commit(ASSET_MUTATIONS.SET_ERROR, 'No ha sido posible obtener los activos')
      } finally {
        commit(ASSET_MUTATIONS.CHANGE_LOADING, false)
      }
    }
  }
})
