import mutations from '@/store/mutations'
import axios from '@/plugins/axios'

const { APP_TYPES } = mutations

const appTypes = {
  namespaced: true,
  state: {
    appTypesList: {}
  },
  getters: {
    appTypesList: ({ appTypesList }) => appTypesList
  },
  mutations: {
    [APP_TYPES](state, types) {
      state.appTypesList = types
    }
  },
  actions: {
    async getAppAllTypes({ commit, dispatch }) {
      try {
        const response = await axios.get(`/types/application-types`)
        commit(APP_TYPES, response)
      } catch (err) {
        dispatch(
          'showNotification',
          {
            type: 'error',
            message: err,
            title: ''
          },
          { root: true }
        )
      }
    },
    async getAppType({ dispatch }, name) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const response = await axios.get(`/types/application-types/${name}`)
        console.log(response)
      } catch (err) {
        dispatch(
          'showNotification',
          {
            type: 'error',
            message: err,
            title: ''
          },
          { root: true }
        )
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default appTypes
