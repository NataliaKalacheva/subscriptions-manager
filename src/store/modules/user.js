import mutations from '@/store/mutations'
import { getUser } from '@/services/firebase/auth.services'

const { USER } = mutations

const userStore = {
  namespaced: true,
  state: {
    user: {}
  },
  getters: {
    user: ({ user }) => user,
    userId: ({ user }) => user.uid
  },
  mutations: {
    [USER](state, user) {
      state.user = user
    }
  },
  actions: {
    setUser: {
      handler({ dispatch }, user) {
        if (!user) return
        dispatch('getUser', user.uid)
      },
      root: true
    },
    async getUser({ commit }) {
      try {
        const user = await getUser()
        commit(USER, user)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default userStore
