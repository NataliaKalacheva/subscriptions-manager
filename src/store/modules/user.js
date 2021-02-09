import mutations from '@/store/mutations'
import { firebaseGetUser } from '@/services/firebase/auth.services'

export const { USER } = mutations

const userStore = {
  namespaced: true,
  state: {
    user: {}
  },
  getters: {
    user: ({ user }) => user,
    userId: ({ user }) => user.uid,
    userName: ({ user }) => user.displayName
  },
  mutations: {
    [USER](state, user) {
      state.user = user
    }
  },
  actions: {
    getUser: {
      async handler({ commit }) {
        try {
          const user = await firebaseGetUser()
          commit(USER, user)
        } catch (err) {
          throw new Error(err)
        }
      },
      root: true
    }
  }
}

export default userStore
