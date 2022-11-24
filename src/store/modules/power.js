// 用户共有的
const UserShare = () => import('@/views/user/components/user-share.vue')
const UserShareform = () => import('@/views/user/components/user-shareput.vue')

// const Userlabs = () => import('@/views/user/components/user-labs.vue')
// 角色特有的模块
const PublishRecruit = () => import('@/views/user/components/teacher/publish-recruit.vue')
const RecruitList = () => import('@/views/user/components/teacher/recruit-list.vue')
const Managelabtor = () => import('@/views/user/components/teacher/manage-labtor.vue')
const Managelab = () => import('@/views/user/components/teacher/manage-lab.vue')
const ManageIntroduce = () => import('@/views/user/components/student/manage-introduce.vue')

const DeliverList = () => import('@/views/user/components/student/deliver-list.vue')
export default {
  namespaced: true,
  state() {
    return {
      studentRoutes0: [
        { path: '/user/introduce', component: ManageIntroduce, name: 'ManageIntroduce' },
        { path: '/user/deliver', component: DeliverList, name: 'DeliverList' }
      ],
      studentRoutes1: [
        { path: '/user/share', component: UserShare, name: 'UserShare' },
        { path: '/user/share/put', component: UserShareform, name: 'UserShareform' },

        { path: '/user/introduce', component: ManageIntroduce, name: 'ManageIntroduce' },
        { path: '/user/deliver', component: DeliverList, name: 'DeliverList' }
      ],
      teacherRoutes: [
        { path: '/user/share', component: UserShare, name: 'UserShare' },
        { path: '/user/share/put', component: UserShareform, name: 'UserShareform' },
        { path: '/user/labtor', component: Managelabtor, name: 'Managelabtor' },
        { path: '/user/lab', component: Managelab, name: 'Managelab' },
        { path: '/user/recruit', component: PublishRecruit, name: 'PublishRecruit' },
        { path: '/user/recruitlist', component: RecruitList, name: 'RecruitList' }
      ]
    }
  },
  mutations: {},
  actions: {},
  getters: {
    getUserRoute: (state) => (userType, labFlag) => {
      if (userType === '0') {
        return state.teacherRoutes
      } else if (userType === '1' && labFlag === 0) {
        return state.studentRoutes0
      } else if (userType === '1' && labFlag === 1) {
        return state.studentRoutes1
      } else return []
    }
  }
}
