import { createRouter, createWebHashHistory } from 'vue-router'
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home/index')
const Login = () => import('@/views/login/index')
const Labs = () => import('@/views/labs/index')
const Student = () => import('@/views/user/student/index')
const Studentinfo = () => import('@/views/user/student/components/student-info.vue')
const Studentpwd = () => import('@/views/user/student/components/student-pwd.vue')
const Teacher = () => import('@/views/user/teacher/index')
const Teachergetnew = () => import('@/views/user/teacher/components/teacher-getnew.vue')
const Register = () => import('@/views/register/index')
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home },
      { path: '/labs/:id', component: Labs }
    ]
  },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/student',
    component: Student,
    children: [
      { path: '', component: Studentinfo },
      { path: '/student/:id', component: Studentinfo },
      { path: '/student/:id/updatepwd/', component: Studentpwd }
    ]
  },
  {
    path: '/teacher',
    component: Teacher,
    children: [
      { path: '', component: Studentinfo },
      { path: '/teacher/getnew', component: Teachergetnew },
      { path: '/student/:id/updatepwd/', component: Studentpwd }
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
