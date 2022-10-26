<template>
  <div class="user-leftnav">
    <div class="accordion" id="user-leftnav">
      <div class="accordion-item" v-for="item in powerlist" :key="item.id">
        <h2 class="accordion-header" :id="`${item.id}head`">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#${item.id}`" aria-expanded="false" :aria-controls="item.id">{{ item.name }}</button>
        </h2>
        <div :id="item.id" class="accordion-collapse collapse" :aria-labelledby="`${item.id}head`" data-bs-parent="#user-leftnav">
          <div class="accordion-body">
            <ul class="nav flex-column">
              <li class="nav-item" v-for="s in item.children" :key="s.path">
                <RouterLink class="nav-link" :to="s.topath">{{ s.name }}</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserLeftnav',
  data() {
    return {
      powerlist: [
        {
          name: '个人管理',
          id: 'modules1',
          children: [
            { name: '查看信息', topath: '/user' },
            { name: '修改密码', topath: '/user/updatepw' },
            { name: '修改头像', topath: '/user/avatar' },
            { name: '个人简介', topath: '/manage/introduce' }
          ]
        },
        {
          name: '分享管理',
          id: 'modules2',
          children: [
            { name: '查看分享', topath: '/user/discuss' },
            { name: '发布分享', topath: '/user/discuss/put' }
          ]
        },
        {
          name: '申请管理',
          id: 'modules3',
          children: [{ name: '查看已申请', topath: '/user/labs' }]
        },
        {
          name: '人员管理',
          id: 'modules4',
          children: [{ name: '查看已申请人员', topath: '/manage/labtor' }]
        },
        {
          name: '招新管理',
          id: 'modules5',
          children: [{ name: '发布招新', topath: '/manage/recruit' }]
        }
      ]
    }
  },
  props: {
    user: {
      type: Object
    }
  },
  mounted() {
    this.getPowerList()
  },
  methods: {
    getPowerList() {
      // 向后端请求权限数据
    }
  }
}
</script>
<style lang="less" scoped>
.user-leftnav {
  position: sticky;
  top: 102px;
}
</style>
