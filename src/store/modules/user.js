// 用户模块
// 学号（id,String）
// 密码（password,String）
// 班级（class,String）
// 是否加入实验室(typel,boolean)
// 姓名（name,String）
// 头像（image,String）
// 联系方式（telephone,String）
// 学院id（collegeid,int）

// 实验室id（laboratoryid,int）
// 职称（professionalTitle,String）
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
      redirectUrl: '/'
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
    }
  }
}
