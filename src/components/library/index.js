// 自动批量注册组件
// require.context() 是webpack提供的一个自动导入的API，但是vite不能
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
const importFn = require.context('./', false, /\.vue$/)
export default {
  install(app) {
    // 批量注册全局组件 keys() 获取读取到的所有文件列表
    importFn.keys().forEach((key) => {
      // 导入组件
      const component = importFn(key).default
      // 注册组件
      app.component(component.name, component)
    })
  }
}
