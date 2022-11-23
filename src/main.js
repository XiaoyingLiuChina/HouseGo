import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ui from './components/library'
import '@/assets/styles/common.less'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ui)
app.mount('#app')
