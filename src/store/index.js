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
    assets: (state) => Object.values(state.assetsKeyMap),
    assetById: (state) => (id) => state.assetsKeyMap[id]
  },

  mutations: {
    [ASSET_MUTATIONS.SET_ASSETS](state, assets) {
      const commentCollection = JSON.parse(localStorage.comments || "{}")

      if (!Array.isArray(assets)) {
        Vue.set(assets, 'comments', commentCollection[assets.id] || [])
        Vue.set(state.assetsKeyMap, assets.id, assets)
      } else {
        state.assetsKeyMap = assets.reduce((keyMap, asset) => {
          Vue.set(asset, 'comments', commentCollection[asset.id] || [])
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
      const commentCollection = JSON.parse(localStorage.comments || "{}")

      if (!commentCollection[assetId]) {
        commentCollection[assetId] = []
      }

      commentCollection[assetId].push(commentItem)
      localStorage.comments = JSON.stringify(commentCollection)
      state.assetsKeyMap[assetId].comments.push(commentItem)
    },

    [ASSET_MUTATIONS.DELETE_COMMENT](state, { assetId, index }) {
      const commentCollection = JSON.parse(localStorage.comments || "{}")

      if (commentCollection[assetId]) {
        commentCollection[assetId].splice(index, 1)
        localStorage.comments = JSON.stringify(commentCollection)
        state.assetsKeyMap[assetId].comments.splice(index, 1)
      }
    }, 

    [ASSET_MUTATIONS.EDIT_COMMENT](state, { assetId, index, text }) {
      const commentCollection = JSON.parse(localStorage.comments || "{}")

      if (commentCollection[assetId]) {
        commentCollection[assetId][index].text = text
        localStorage.comments = JSON.stringify(commentCollection)
        Vue.set(state.assetsKeyMap[assetId].comments[index], 'text', text)
      }
    }
  },

  actions: {
    async [ASSET_ACTIONS.FETCH_ASSETS]({ commit }, assetId) {
      try {
        commit(ASSET_MUTATIONS.CHANGE_LOADING, true)
        const assets = await api.fetchAssets(assetId)
        commit(ASSET_MUTATIONS.SET_ASSETS, assets)
      } catch (error) {
        commit(ASSET_MUTATIONS.SET_ERROR, 'No ha sido posible obtener los activos')
      } finally {
        commit(ASSET_MUTATIONS.CHANGE_LOADING, false)
      }
    }
  }
})
