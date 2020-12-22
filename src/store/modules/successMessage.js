import mutations from '@/store/mutations'

const { SUCCESS_MESSAGE } = mutations

const successMessage = {
  state: {
    successMsg: 'Successful'
  },
  getters: {
    successMsg: ({ successMsg }) => successMsg
  },
  mutations: {
    [SUCCESS_MESSAGE](state, msg) {
      state.successMsg = msg
    }
  },
  actions: {
    setSuccessMessage({ commit }, msg = 'Successful') {
      commit(SUCCESS_MESSAGE, msg)
    }
  }
}

export default successMessage
