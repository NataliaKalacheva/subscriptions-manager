import mutations from '@/store/mutations'
import axios from '@/plugins/axios'
import serializeSubscriptionsResponse from '../utils/serializeSubscriptionsResponse'

const { SUBSCRIPTIONS, UPDATE_SUBSCRIPTION } = mutations

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
    [UPDATE_SUBSCRIPTION](state, subscription) {
      state.subscriptions[subscription.id] = subscription
    }
  },
  actions: {
    async getSubscriptions({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const response = await axios.get(`/subscriptions`)
        const subscriptions = serializeSubscriptionsResponse(response)
        console.log(response)
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
    async getSubscriptionById({ commit, dispatch }, id) {
      try {
        dispatch('toggleLoader', true, { root: true })
        const response = await axios.get(`/subscriptions/${id}`)
        commit('UPDATE_SUBSCRIPTION', response)
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
    async addSubscription({ dispatch }, subscription) {
      try {
        dispatch('toggleLoader', true, { root: true })
        console.log(subscription)
        await axios.post(`/subscriptions`, subscription)
        dispatch('getSubscriptions')
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
    async deleteSubscription({ dispatch }, subscriptionId) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.delete(`/subscriptions/${subscriptionId}`)
        dispatch('getSubscriptions')
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
    async updateSubscription({ dispatch }, item) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await axios.patch(`/subscriptions/${item.id}`, item)
        dispatch('getSubscriptionById', item.id)
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
