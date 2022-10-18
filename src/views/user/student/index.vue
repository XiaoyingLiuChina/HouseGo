<template>
  <div class="studentPage">
    <AppHeader>
      <div class="info-header">
        <span id="welcome">欢迎 小傻逼宋洋</span>
        <RouterLink to="/" @click="logout">退出登录</RouterLink>
      </div>
    </AppHeader>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <StudentLeftnav />
        </div>
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
import StudentLeftnav from './components/student-leftnav.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  name: 'StudentPage',
  components: { AppHeader, StudentLeftnav, AppFooter },
  methods: {
    logout() {
      console.log('宋洋退出登录啦')
    }
  }
}
</script>
<style lang="less" scoped>
.studentPage {
  .info-header {
    margin: 0 auto;
    a {
      margin-left: 50px;
    }
  }
  .container {
    min-height: 470px;
  }
}
</style>
