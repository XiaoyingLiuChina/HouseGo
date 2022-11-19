// 左侧导航模块
export default {
  namespaced: true,
  state() {
    return {
      //   学生
      powerlist1: [
        {
          name: '我的账户',
          id: 'modules1',
          children: [
            { name: '个人中心', topath: '/user' },
            { name: '修改头像', topath: '/user/avatar' },
            { name: '我的简历', topath: '/user/introduce' }
          ]
        },
        {
          name: '分享区管理',
          id: 'modules2',
          children: [
            { name: '查看分享', topath: '/user/share' },
            { name: '发布分享', topath: '/user/share/put' }
          ]
        },
        {
          name: '投递管理',
          id: 'modules3',
          children: [{ name: '查看投递', topath: '/user/share' }]
        }
      ],
      //   老师
      powerlist0: [
        {
          name: '我的账户',
          id: 'modules1',
          children: [
            { name: '个人中心', topath: '/user' },
            { name: '修改头像', topath: '/user/avatar' }
          ]
        },
        {
          name: '分享区管理',
          id: 'modules2',
          children: [
            { name: '查看分享', topath: '/user/share' },
            { name: '发布分享', topath: '/user/share/put' }
          ]
        },
        {
          name: '招新管理',
          id: 'modules3',
          children: [
            { name: '发布招新信息', topath: '/user/recruit' },
            { name: '招新列表', topath: '/user/recruitlist' },
            { name: '查看已申请人员', topath: '/user/labtor' }
          ]
        },
        // {
        //   name: '实验室管理',
        //   id: 'modules5',
        //   children: [
        //     { name: '查看简介', topath: '/labs/0' },
        //     { name: '修改简介', topath: '/user/labedit' }
        //   ]
        // },
        {
          name: '实验室管理',
          id: 'modules4',
          children: [{ name: '我的实验室', topath: '/user/lab' }]
        }
      ]
    }
  },
  mutations: {},
  actions: {}
}
