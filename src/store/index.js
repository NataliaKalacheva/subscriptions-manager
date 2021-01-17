import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/plugins/firebase'
import auth from '@/store/modules/auth'
import notifications from '@/store/modules/notifications'
import subscriptions from '@/store/modules/subscriptions'
import successMessage from '@/store/modules/successMessage'
import appTypes from '@/store/modules/appTypes'
import user from '@/store/modules/user'
import loader from '@/store/modules/loader'
import { getUserIdToken } from '@/services/firebase/auth.services'
import router from '@/router'

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
    appTypes
  }
})

firebase.auth().onAuthStateChanged(async userData => {
  store.dispatch('setIsLoggedInState', Boolean(userData))
  store.dispatch('setUser', userData)
  if (userData) {
    const token = await getUserIdToken()
    localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY, token)
  } else {
    router.push({ path: 'Login' })
    localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY)
  }
})

store.dispatch('appTypes/getAppAllTypes')

export default store
