import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/plugins/firebase'
import auth from '@/store/modules/auth'
import notifications from '@/store/modules/notifications'
import { getUserIdToken } from '@/services/firebase/auth.services'
import router from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    notifications
  }
})

firebase.auth().onAuthStateChanged(async userData => {
  console.log(userData)
  store.dispatch('setIsLoggedInState', Boolean(userData))
  // store.dispatch('setUserState', userData)
  if (userData) {
    const token = await getUserIdToken()
    console.log(process.env)
    localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY, token)
  } else {
    router.push({ path: 'Login' })
    localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY)
  }
})

export default store
