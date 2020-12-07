import mutations from '@/store/mutations'
// import { firebaseSignUp, firebaseLogin } from '@/services/firebase/auth.services'

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
    setIsLoginState: {
      handler({ commit }, boolean) {
        commit(IS_LOGIN, boolean)
      }
    }
  }
}

export default authStore
