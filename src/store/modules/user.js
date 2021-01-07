import mutations from '@/store/mutations'
import axios from '@/plugins/axios'

const { USER } = mutations

const userStore = {
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
    setUser({ dispatch }, user) {
      if (!user) return
      dispatch('getUser', user.uid)
    },
    async getUser({ commit }, id) {
      try {
        const user = await axios.get(`/user/${id}`)
        commit(USER, user)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default userStore
