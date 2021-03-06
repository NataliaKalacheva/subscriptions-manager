import mutations from '@/store/mutations'
import axios from '@/plugins/axios'

const { OVERVIEW, SHOW_DETAILS } = mutations

const overviewStore = {
  namespaced: true,
  state: {
    overview: {},
    showDetails: false
  },
  getters: {
    overview: ({ overview }) => overview,
    showDetails: ({ showDetails }) => showDetails,
    lastSixMonths: ({ overview }) => {
      const sortLabels = Object.keys(overview)
        .sort((a, b) => overview[b].timestamp - overview[a].timestamp)
        .map(month => overview[month])

      return sortLabels.slice(0, 6)
    }
  },
  mutations: {
    [OVERVIEW](state, value = {}) {
      state.overview = value
    },
    [SHOW_DETAILS](state, value = {}) {
      state.showDetails = value
    }
  },
  actions: {
    async getOverview({ commit, dispatch, rootGetters }) {
      const userId = rootGetters['user/userId']
      if (!userId) {
        return
      }
      try {
        dispatch('toggleLoader', true, { root: true })
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
    },
    toggleDetails({ commit, getters }) {
      const showDetails = !getters.showDetails
      commit(SHOW_DETAILS, showDetails)
    }
  }
}

export default overviewStore
