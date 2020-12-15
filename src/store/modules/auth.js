import mutations from '@/store/mutations'
import {
  firebaseSignUp,
  firebaseLogin,
  firebaseSignOut,
  firebaseResetPassword
} from '@/services/firebase/auth.services'
import router from '@/router'

const { IS_FIRST_LOGIN, IS_LOGIN, SUCCESS_MESSAGE } = mutations

const authStore = {
  namespaced: true,
  state: {
    isLogin: Boolean(localStorage.getItem('vue_app_token')),
    successMessage: 'Successful'
  },
  getters: {
    isLogin: ({ isLogin }) => isLogin,
    successMessage: ({ successMessage }) => successMessage
  },
  mutations: {
    [IS_LOGIN](state, boolean) {
      console.log(state.isLogin)
      state.isLogin = boolean
    },
    [SUCCESS_MESSAGE](state, value) {
      state.successMessage = value
    }
  },
  actions: {
    setIsLoggedInState: {
      handler({ commit }, boolean) {
        commit(IS_LOGIN, boolean)
      },
      root: true
    },
    setSuccessMessage({ commit }, value) {
      commit(SUCCESS_MESSAGE, value)
    },
    async signUp({ commit, dispatch }, { email, password }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await firebaseSignUp(email, password)
        commit(IS_FIRST_LOGIN, true)
        router.push({ path: '/' })
      } catch (err) {
        console.log(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        dispatch('toggleLoader', true, { root: true })
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
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async signOut({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
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
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async resetPassword({ dispatch }, { email }) {
      try {
        dispatch('toggleLoader', true, { root: true })
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
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default authStore
