<template>
  <div class="user-page">
    <AppTopnav />
    <AppHeader />

    <div class="container">
      <UserLeftnav />
      <div class="main"><RouterView></RouterView></div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import UserLeftnav from './components/user-leftnav.vue'
import { getTeacher, getStudent, getCollege } from '@/api/user'
export default {
  name: 'UserPage',
  components: { AppHeader, AppFooter, UserLeftnav, AppTopnav },

  data() {
    return {
      user: this.$store.state.user.profile
    }
  },
  mounted() {
    this.getUser()
  },

  methods: {
    async getUser() {
      let data = null
      let college = ''
      if (this.user.type === '0') {
        data = await getTeacher(this.user.id)
      } else {
        data = await getStudent(this.user.id)
      }
      this.$store.commit('user/setUser', data)
      college = await getCollege(this.user.collegeid)
      // 取出学院名称
      const { name } = college[0]
      // 不能直接用name会覆盖用户的name
      college = name
      Object.assign(data, { college })
      // 再次更新
      this.$store.commit('user/setUser', data)
    }
  }
}
</script>
<style lang="less" scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 999;
}
.user-page {
  .info-header {
    margin: 0 auto;
    a {
      margin-left: 50px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .container {
    min-height: 470px;
    display: flex;

    .main {
      flex: 1;
      margin-left: 10px;
    }
  }
}
</style>
