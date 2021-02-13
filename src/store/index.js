import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/plugins/firebase'
import auth from '@/store/modules/auth'
import notifications from '@/store/modules/notifications'
import subscriptions from '@/store/modules/subscriptions'
import successMessage from '@/store/modules/successMessage'
import appTypes from '@/store/modules/appTypes'
import overview from '@/store/modules/overview'
import user from '@/store/modules/user'
import loader from '@/store/modules/loader'
import { getUserIdToken } from '@/services/firebase/auth.services'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    notifications,
    loader,
    subscriptions,
    successMessage,
    user,
    appTypes,
    overview
  }
})

firebase.auth().onAuthStateChanged(async userData => {
  store.dispatch('setIsLoggedInState', Boolean(userData))
  store.dispatch('getUser')

  if (userData) {
    const token = await getUserIdToken()
    localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY, token)
  } else {
    localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY)
  }
})

store.dispatch('appTypes/getAppAllTypes')

export default store
