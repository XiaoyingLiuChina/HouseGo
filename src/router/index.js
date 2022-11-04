import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home/index')
const Homerenew = () => import('@/views/home/components/home-recruit.vue')
const Homeshare = () => import('@/views/home/components/home-share.vue')
const Login = () => import('@/views/login/index')
const Labs = () => import('@/views/labs/index')
// 用户共有的
const User = () => import('@/views/user/index')
const UserInfo = () => import('@/views/user/components/user-info.vue')
const UserPassword = () => import('@/views/user/components/user-password.vue')
const UserDiscuss = () => import('@/views/user/components/user-discuss.vue')
const UserShareform = () => import('@/views/user/components/user-discussput.vue')
const UserAvatar = () => import('@/views/user/components/user-avatar.vue')
const Userlabs = () => import('@/views/user/components/user-labs.vue')
// 角色特有的模块
const PublishRecruit = () => import('@/views/user/components/teacher/publish-recruit.vue')
const Managelabtor = () => import('@/views/user/components/teacher/manage-labtor.vue')
const ManageIntroduce = () => import('@/views/user/components/student/manage-introduce.vue')

const Register = () => import('@/views/register/index')
// 实验室相关
const SearchLabs = () => import('@/views/labs/components/labs-all.vue')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', name: 'Home', component: Home },
      { path: '/labs/:id', component: Labs },
      { path: '/search/:key', component: SearchLabs },
      { path: '/recruit', name: 'Recruit', component: Homerenew },
      { path: '/tell', name: 'Share', component: Homeshare }
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
      { path: '/user/discuss/put', component: UserShareform },
      { path: '/user/avatar', component: UserAvatar },
      { path: '/user/labs', component: Userlabs },
      { path: '/manage/labtor', component: Managelabtor },
      { path: '/manage/introduce', component: ManageIntroduce },
      { path: '/manage/recruit', component: PublishRecruit }
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
