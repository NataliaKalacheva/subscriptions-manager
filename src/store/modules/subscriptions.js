import mutations from '@/store/mutations'
import Vue from 'vue'
import axios from '@/plugins/axios'

const { ADD_SUBSCRIPTION, SUBSCRIPTIONS, DELETE_SUBSCRIPTION, UPDATE_SUBSCRIPTION } = mutations

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
    },
    [DELETE_SUBSCRIPTION](state, subscriptionId) {
      Vue.delete(state.subscriptions, subscriptionId)
    },
    [UPDATE_SUBSCRIPTION](state, subscription) {
      state.subscriptions[subscription.id] = subscription
    }
  },
  actions: {
    async getSubscriptions({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const response = await axios.get(`/subscriptions`)
        const subscriptions = response.reduce((acc, item) => {
          acc[item.id] = item
          return acc
        }, {})
        commit(SUBSCRIPTIONS, subscriptions)
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
    },
    async addSubscription({ commit, dispatch }, subscription) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.post(`/subscriptions`, subscription)
        const item = { ...subscription, id: String(Math.random()) }
        commit('ADD_SUBSCRIPTION', item)
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
    },
    async deleteSubscription({ commit, dispatch }, subscriptionId) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.delete(`/subscriptions/${subscriptionId}`)
        commit('DELETE_SUBSCRIPTION', subscriptionId)
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
    },
    async updateSubscription({ commit, dispatch }, item) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.patch(`/subscriptions/${item.id}`, item)
        commit('UPDATE_SUBSCRIPTION', item)
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

export default subscriptionsStore
