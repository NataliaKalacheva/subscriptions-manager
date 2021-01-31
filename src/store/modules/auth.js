import mutations from '@/store/mutations'
import {
  firebaseSignUp,
  firebaseLogin,
  firebaseSignOut,
  firebaseResetPassword,
  firebaseUpdateUser
} from '@/services/firebase/auth.services'
import router from '@/router'

const { IS_LOGIN } = mutations

const authStore = {
  namespaced: true,
  state: {
    isLogin: Boolean(localStorage.getItem(process.env.VUE_APP_LS_TOKEN_KEY))
  },
  getters: {
    isLogin: ({ isLogin }) => isLogin
  },
  mutations: {
    [IS_LOGIN](state, boolean) {
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
    async signUp({ dispatch }, { email, password }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await firebaseSignUp(email, password)
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
        throw new Error(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async updateUser({ dispatch }, user) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await firebaseUpdateUser(user)
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
        throw new Error(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async login({ dispatch }, { email, password }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await firebaseLogin(email, password)
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
        throw new Error(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async signOut({ commit, dispatch }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await firebaseSignOut()
        commit(IS_LOGIN, false)
        router.push({ name: 'Login' })
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
        throw new Error(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    },
    async resetPassword({ dispatch }, { email }) {
      try {
        dispatch('toggleLoader', true, { root: true })
        await firebaseResetPassword(email)
        dispatch('setSuccessMessage', 'Please check your email to reset your password', {
          root: true
        })
        router.push({ name: 'Success', query: { type: 'reset-password' } })
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
        throw new Error(err)
      } finally {
        dispatch('toggleLoader', false, { root: true })
      }
    }
  }
}

export default authStore
