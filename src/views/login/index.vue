<template>
  <div class="page-login">
    <login-header>欢迎登录</login-header>
    <section class="login-section">
      <div class="wrapper">
        <login-form></login-form>
      </div>
    </section>
    <login-footer></login-footer>
  </div>
</template>
<script>
import loginHeader from './components/login-header.vue'
import loginFooter from '@/components/app-footer.vue'
import loginForm from './components/login-form.vue'
export default {
  name: 'PageLogin',
  components: { loginHeader, loginFooter, loginForm },
  setup() {}
}
</script>
<style scoped lang="less">
.login-section {
  height: 488px;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/images/login-bg.png) no-repeat center/cover;
  .wrapper {
    width: 380px;
    min-height: 400px;
  }
}
</style>
