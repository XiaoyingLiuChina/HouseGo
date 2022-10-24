<template>
  <div class="user-page">
    <AppHeader>
      <div class="info-header">
        <span id="welcome">
          欢迎 <i class="bi bi-person"></i>小傻逼宋洋
          <span v-if="user.type === 'teacher'" style="font-size: 12px">老师</span>
          <span v-else style="font-size: 12px">同学</span>
        </span>
        <a href="#" @click="logout">退出登录</a>
      </div>
    </AppHeader>
    <div class="container">
      <div class="row">
        <div class="col-2"><UserLeftnav :user="user" /></div>
        <div class="col-10">
          <div class="iframe">
            <RouterView></RouterView>
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import UserLeftnav from './components/user-leftnav.vue'
export default {
  name: 'UserPage',
  components: { AppHeader, AppFooter, UserLeftnav },
  data() {
    return {
      user: this.$store.state.user.profile
    }
  },
  methods: {
    logout() {
      this.$store.commit('user/setUser', {})
      this.$router.push('/login')
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
  }
  .container {
    min-height: 470px;
  }
  .iframe {
    margin-top: 10px;
  }
}
</style>
