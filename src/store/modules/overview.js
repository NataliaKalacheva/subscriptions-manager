import mutations from '@/store/mutations'
import axios from '@/plugins/axios'

const { OVERVIEW } = mutations

const overviewStore = {
  namespaced: true,
  state: {
    overview: {}
  },
  getters: {
    overview: ({ overview }) => overview
  },
  mutations: {
    [OVERVIEW](state, value = {}) {
      state.overview = value
    }
  },
  actions: {
    async getOverview({ commit, dispatch, rootGetters }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const userId = rootGetters['user/userId']
        const overview = await axios.get(`/overview/${userId}`)
        commit(OVERVIEW, overview)
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
        throw new Error(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default overviewStore
