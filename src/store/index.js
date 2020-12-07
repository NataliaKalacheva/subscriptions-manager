import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/plugins/firebase'
import auth from '@/store/modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth
  }
})

firebase.auth().onAuthStateChanged(async userData => {
  console.log(userData)
  // store.dispatch('setIsLoggedInState', Boolean(userData))
  // store.dispatch('setUserState', userData)
  // if (userData) {
  //   const token = await getUserIdToken()
  //   localStorage.setItem(process.env.VUE_APP_LS_TOKEN_KEY, token)
  // } else {
  //   localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY)
  // }
})
