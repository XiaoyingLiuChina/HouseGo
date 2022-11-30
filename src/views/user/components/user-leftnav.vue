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
      // powerlist: [
      //   {
      //     name: '我的账户',
      //     id: 'modules1',
      //     children: [
      //       { name: '个人中心', topath: '/user' },
      //       { name: '修改头像', topath: '/user/avatar' }
      //     ]
      //   },
      //   {
      //     name: '分享区管理',
      //     id: 'modules2',
      //     children: [
      //       { name: '查看分享', topath: '/user/share' },
      //       { name: '发布分享', topath: '/user/share/put' }
      //     ]
      //   },
      //   {
      //     name: '招新管理',
      //     id: 'modules4',
      //     children: [
      //       { name: '发布招新信息', topath: '/user/recruit' },
      //       { name: '查看已申请人员', topath: '/user/labtor' }
      //     ]
      //   },
      //   {
      //     name: '实验室管理',
      //     id: 'modules5',
      //     children: [
      //       { name: '查看简介', topath: '/labs/0' },
      //       { name: '修改简介', topath: '/user/labedit' }
      //     ]
      //   }
      // ]
      powerlist: null
    }
  },

  mounted() {
    this.getPowerList()
  },
  methods: {
    getPowerList() {
      // 向后端请求权限数据
      // 老师
      const user = this.$store.state.user.profile
      if (user.type === '0') {
        this.powerlist = this.$store.state.nav.powerlist0
      } else if (user.type === '1' && user.typel === 1) {
        this.powerlist = this.$store.state.nav.powerlist1
      } else {
        this.powerlist = this.$store.state.nav.powerlist2
      }
    }
  }
}
</script>
<style lang="less" scoped>
.user-leftnav {
  position: relative;
  .accordion {
    position: sticky;
    top: 112px;
    margin-top: 10px;
    width: 220px;
  }
}
</style>
