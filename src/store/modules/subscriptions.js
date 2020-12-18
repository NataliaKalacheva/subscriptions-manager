import mutations from '@/store/mutations'
import Vue from 'vue'
import axios from '@/plugins/axios'

const { ADD_SUBSCRIPTION, ALL_SUBSCRIPTIONS } = mutations

const subscriptionsStore = {
  namespaced: true,
  state: {
    subscriptions: {
      1: {
        name: 'Netflix',
        description: 'Some description',
        startDate: 1594483747063,
        period: 'month',
        userId: 'meEgv9mwvvbvGXrHrt6mYKZPZ343',
        isPayed: true,
        price: 10,
        currency: 'USD'
      }
    }
  },
  getters: {
    subscriptions: ({ subscriptions }) => Object.values(subscriptions),
    total: ({ subscriptions }) => Object.keys(subscriptions).length
  },
  mutations: {
    [ALL_SUBSCRIPTIONS](state, value) {
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
        const request = axios.get(`??`) // ass get request
        const response = await Promise.all(request)
        const allSubscriptions = response // needs to serialize here

        commit(ALL_SUBSCRIPTIONS, allSubscriptions)
      } catch (err) {
        console.log(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default subscriptionsStore
