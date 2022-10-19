<template>
  <div class="register-page">
    <LoginHeader>欢迎注册</LoginHeader>
    <section class="register-section">
      <div class="wrapper">
        <RegisterForm></RegisterForm>
      </div>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import LoginHeader from '../login/components/login-header.vue'
import AppFooter from '@/components/app-footer.vue'
import RegisterForm from './components/register-form.vue'
export default {
  name: 'RegisterPage',
  components: { LoginHeader, AppFooter, RegisterForm }
}
</script>
<style lang="less" scoped>
.register-section {
  height: 488px;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../../assets/images/login-bg.png) no-repeat center/cover;
  .wrapper {
    width: 388px;
    min-height: 400px;
  }
}
</style>
