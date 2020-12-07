import mutations from '@/store/mutations'
import { firebaseSignUp, firebaseLogin } from '@/services/firebase/auth.services'
import router from '@/router'

const { IS_FIRST_LOGIN, IS_LOGIN } = mutations

const authStore = {
  namespaced: true,
  state: {
    isFirstLogin: false,
    isLogin: false
  },
  getters: {
    isFirstLogin: ({ isFirstLogin }) => isFirstLogin,
    isLogin: ({ isLogin }) => isLogin
  },
  mutations: {
    [IS_FIRST_LOGIN](state, boolean) {
      state.isFirstLogin = boolean
    },
    [IS_LOGIN](state, boolean) {
      state.isLogin = boolean
    }
  },
  actions: {
    async signUp({ commit }, { email, password }) {
      try {
        await firebaseSignUp(email, password)
        commit(IS_FIRST_LOGIN, true)
        router.push({ path: 'Home' })
      } catch (err) {
        console.log(err)
      }
    },
    async login({ commit }, { email, password }) {
      try {
        await firebaseLogin(email, password)
        commit(IS_LOGIN, true)
        router.push({ path: 'Home' })
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default authStore
