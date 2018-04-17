import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

const URL_RESOURCE = '/symbols'

export const ASSET_ACTIONS = {
  FETCH_ASSETS: 'fetchAssets'
}

export const ASSET_MUTATIONS = {
  SET_ERROR: 'setError',
  SET_ASSETS: 'setAssets',
  CHANGE_LOADING: 'changeLoading'
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
      if (!Array.isArray(assets)) {
        Vue.set(state.assetsKeyMap, assets.id, assets)
      } else { 
        state.assetsKeyMap = assets.reduce((keyMap, asset) => {
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
