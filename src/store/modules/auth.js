import mutations from '@/store/mutations'
import {
  firebaseSignUp,
  firebaseLogin,
  firebaseSignOut,
  firebaseResetPassword
} from '@/services/firebase/auth.services'
import router from '@/router'

const { IS_FIRST_LOGIN, IS_LOGIN } = mutations

const authStore = {
  namespaced: true,
  state: {
    isLogin: Boolean(localStorage.getItem('vue_app_token')),
    message: ''
  },
  getters: {
    isLogin: ({ isLogin }) => isLogin
  },
  mutations: {
    [IS_LOGIN](state, boolean) {
      console.log(state.isLogin)
      state.isLogin = boolean
    }
  },
  actions: {
    setIsLoggedInState: {
      handler({ commit }, boolean) {
        commit(IS_LOGIN, boolean)
      },
      root: true
    },
    async signUp({ commit }, { email, password }) {
      try {
        await firebaseSignUp(email, password)
        commit(IS_FIRST_LOGIN, true)
        router.push({ path: '/' })
      } catch (err) {
        console.log(err)
      }
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        await firebaseLogin(email, password)
        commit(IS_LOGIN, true)
        router.push({ path: '/' })
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
      }
    },
    async signOut({ commit, dispatch }) {
      try {
        await firebaseSignOut()
        commit(IS_LOGIN, false)
      } catch (err) {
        console.log(err)
        dispatch(
          'showNotification',
          {
            type: 'error',
            message: err,
            title: ''
          },
          { root: true }
        )
      }
    },
    async resetPassword({ dispatch }, { email }) {
      try {
        await firebaseResetPassword(email)
      } catch (err) {
        console.log(err)
        dispatch(
          'showNotification',
          {
            type: 'error',
            message: err,
            title: ''
          },
          { root: true }
        )
      }
    }
  }
}

export default authStore
