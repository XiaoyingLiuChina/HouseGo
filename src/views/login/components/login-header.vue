<template>
  <header class="login-header">
    <div class="container">
      <h1 class="logo"><RouterLink to="/">实验室招新</RouterLink></h1>
      <h3 class="sub"><slot /></h3>

      <RouterLink class="entry" to="/">
        进入网站首页
        <i class="bi bi-chevron-right"></i>
        <i class="bi bi-chevron-right"></i>
      </RouterLink>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LoginHeader'
}
</script>

<style scoped lang="less">
.login-header {
  background: @appColor;
  border-bottom: 1px solid @appColor;
  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .logo {
    width: 200px;
    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url(../../../assets/images/logo.png) no-repeat center 18px / contain;
    }
  }
  .sub {
    flex: 1;
    font-size: 24px;
    font-weight: normal;
    margin-bottom: 38px;
    margin-left: 20px;
    color: #666;
  }
  .entry {
    width: 120px;
    margin-bottom: 38px;
    font-size: 16px;
    i {
      font-size: 14px;
      letter-spacing: -5px;
    }
  }
}
</style>
