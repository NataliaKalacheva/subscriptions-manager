import mutations from '@/store/mutations'

const { TOGGLE_LOADER } = mutations

const loaderStore = {
  state: {
    isShowLoader: false
  },
  getters: {
    isShowLoader: ({ isShowLoader }) => isShowLoader
  },
  mutations: {
    [TOGGLE_LOADER](state, value) {
      state.isShowLoader = value
    }
  },
  actions: {
    toggleLoader({ commit }, value) {
      commit(TOGGLE_LOADER, value)
    }
  }
}

export default loaderStore
