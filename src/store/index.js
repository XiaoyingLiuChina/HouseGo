import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'
import user from './modules/user'
import nav from './modules/nav'
import lab from './modules/lab'
import power from './modules/power'
// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    user,
    nav,
    lab,
    power
  },
  getters: {
    // vuex的计算属性
  },
  plugins: [
    createPersistedstate({
      key: 'housego',
      paths: ['user', 'lab']
    })
  ]
})
