// 实验室列表
export default {
  namespaced: true,
  state() {
    return {
      lablist: [],
      searchlist: []
    }
  },
  mutations: {
    setLabList(state, data) {
      state.lablist = data
    },
    updateSearchList(state, searchlist) {
      state.searchlist = searchlist
    }
  },
  actions: {
    updateSearchList(context, args) {
      context.commit('updateSearchList', args)
    },
    setLabList(context, args) {
      context.commit('setLabList', args)
    }
  }
}
