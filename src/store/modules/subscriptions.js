import mutations from '@/store/mutations'
import Vue from 'vue'
import axios from '@/plugins/axios'

const { ADD_SUBSCRIPTION, SUBSCRIPTIONS } = mutations

const subscriptionsStore = {
  namespaced: true,
  state: {
    subscriptions: {}
  },
  getters: {
    subscriptions: ({ subscriptions }) => Object.values(subscriptions),
    total: ({ subscriptions }) => Object.keys(subscriptions).length
  },
  mutations: {
    [SUBSCRIPTIONS](state, value = {}) {
      state.subscriptions = value
    },
    [ADD_SUBSCRIPTION](state, newItem) {
      Vue.set(state.subscriptions, newItem.id, newItem)
    }
  },
  actions: {
    addSubscription({ commit }, newItem) {
      const item = { ...newItem, id: String(Math.random()) }
      commit('ADD_SUBSCRIPTION', item)
    },
    async getSubscriptions({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        axios.get(`/subscriptions`).then(function getResponse(response) {
          const subscriptions = response.reduce((acc, item) => {
            acc[item.id] = item
            return acc
          }, {})
          commit(SUBSCRIPTIONS, subscriptions)
        })
      } catch (err) {
        console.log(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default subscriptionsStore
