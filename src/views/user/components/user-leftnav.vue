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
          id: 'models1',
          children: [
            { name: '查看信息', topath: `/user` },
            { name: '修改秘密', topath: `/user/updatepw` }
          ]
        },
        {
          name: '讨论管理',
          id: 'models2',
          children: [
            { name: '查看信息', topath: '/user/' },
            { name: '修改秘密', topath: '/user/updatepw' }
          ]
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
<style lang="less" scoped></style>
