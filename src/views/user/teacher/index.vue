<template>
  <div class="teacherPage">
    <AppHeader>
      <div class="info-header">
        <span id="welcome">欢迎 小傻逼宋洋老师</span>
        <RouterLink to="/" @click="logout">退出登录</RouterLink>
      </div>
    </AppHeader>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <TeacherLeftnav />
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
import TeacherLeftnav from './components/teacher-leftnav.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  name: 'TeacherPage',
  components: { AppHeader, AppFooter, TeacherLeftnav },
  methods: {
    logout() {
      console.log('宋洋退出登录啦')
    }
  }
}
</script>
<style lang="less" scoped>
.teacherPage {
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
    margin-top: 20px;
  }
}
</style>
