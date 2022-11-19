// 用户模块
export default {
  namespaced: true,
  state() {
    return {
      // 用户信息
      profile: {
        id: '',
        type: ''
      },
      // 登录后回跳路径
      redirectUrl: '/',
      myResume: {},
      myLab: {}
    }
  },
  mutations: {
    // 修改用户信息，payload就是用户信息对象
    setUserType(state, payload) {
      state.profile.id = payload.id
      state.profile.type = payload.type
    },
    setUser(state, payload) {
      Object.assign(state.profile, payload)
      // state.profile = ({}, state.profile, payload)
    },
    deleteUser(state, payload) {
      state.profile = payload
      state.myResume = payload
      state.myLab = payload
    },
    // 修改回跳地址
    setRedirectUrl(state, url) {
      state.redirectUrl = url
    },
    updateAvatar(state, avatar) {
      state.profile.image = avatar
    },
    updatePassword(state, password) {
      state.profile.password = password
    },
    setResume(state, resume) {
      state.myResume = resume
    },
    setLab(state, lab) {
      state.myLab = lab
    }
  },
  actions: {
    setUserType(context, args) {
      context.commit('setUserType', args)
    },
    setUser(context, args) {
      context.commit('setUser', args)
    },
    deleteUser(context) {
      context.commit('delereUser')
    },
    updateAvatar(context, args) {
      context.commit('updateAvatar', args)
    },
    updatePassword(context, args) {
      context.commit('updatePassword', args)
    },
    setResume(context, args) {
      context.commit('setResume', args)
    },
    setLab(context, args) {
      context.commit('setLab', args)
    }
  }
}
