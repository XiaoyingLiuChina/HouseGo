import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home/index')
const Homerenew = () => import('@/views/home/components/home-renew.vue')
const Homeshare = () => import('@/views/home/components/home-share.vue')
const Login = () => import('@/views/login/index')
const Labs = () => import('@/views/labs/index')

const User = () => import('@/views/user/index')
const UserInfo = () => import('@/views/user/components/user-info.vue')
const UserPassword = () => import('@/views/user/components/user-password.vue')
const UserDiscuss = () => import('@/views/user/components/user-discuss.vue')
const UserShareform = () => import('@/views/user/components/user-discussput.vue')

const Register = () => import('@/views/register/index')

const SearchLabs = () => import('@/views/labs/components/labs-all.vue')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/labs/:id', component: Labs },
      { path: '/search/:key', component: SearchLabs },
      { path: '/labs/renew', component: Homerenew },
      { path: '/tell', component: Homeshare }
    ]
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/user',
    component: User,
    children: [
      { path: '', component: UserInfo },
      { path: '/user/updatepw', component: UserPassword },
      { path: '/user/discuss', component: UserDiscuss },
      { path: '/user/discuss/put', component: UserShareform }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则
  routes
})

export default router
