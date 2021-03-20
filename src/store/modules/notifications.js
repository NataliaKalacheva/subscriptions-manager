import mutations from '@/store/mutations'

const { SHOW_NOTIFY } = mutations

const notificationsStore = {
  state: {
    messagePool: []
  },
  getters: {
    messagePool: ({ messagePool }) => messagePool[messagePool.length - 1]
  },
  mutations: {
    [SHOW_NOTIFY](state, msg) {
      state.messagePool.push(msg)
    }
  },
  actions: {
    showNotification({ commit }, payload = {}) {
      commit(SHOW_NOTIFY, payload)
    }
  }
}

export default notificationsStore
