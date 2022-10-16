import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home/index')
const Login = () => import('@/views/login/index')
const Labs = () => import('@/views/labs/index')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/labs/:id', component: Labs }
    ]
  },
  { path: '/login', component: Login }
]

// 创建路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则
  routes
})

export default router
