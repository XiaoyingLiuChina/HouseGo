// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      profile: {
        account: '',
        password: '',
        type: '',
        isAgree: false,
        avatar: '',
        token: ''
      },
      // 登录后回跳路径
      redirectUrl: '/'
    }
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setUser(state, payload) {
      state.profile = payload
    },
    // 修改回跳地址
    setRedirectUrl(state, url) {
      state.redirectUrl = url
    },
    updateAvatar(state, avatar) {
      state.profile.avatar = avatar
    }
  },
  actions: {
    setUser(context, args) {
      context.commit('setUser', args)
    },
    updateAvatar(context, args) {
      context.commit('updateAvatar', args)
    }
  }
}