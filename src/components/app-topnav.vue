<template>
  <div class="app-topnav">
    <ul class="nav justify-content-end" style="background-color: #e3f2fd">
      <li class="nav-item"><RouterLink to="/login" class="nav-link">请先登录</RouterLink></li>
      <li class="nav-item"><RouterLink to="/teacher" class="nav-link">测试点：教师个人中心</RouterLink></li>
      <li class="nav-item"><RouterLink to="/register" class="nav-link">马上注册</RouterLink></li>
      <li class="nav-item"><RouterLink to="/student" class="nav-link">测试点：学生个人中心</RouterLink></li>
      <li class="nav-item"><a class="nav-link" href="#">关于我们</a></li>
      <li class="nav-item"><a class="nav-link" href="#">退出登录</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AppTopnav'
}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  .nav-item {
    display: flex;
    height: 60px;
    align-items: center;
    .hoverShadow();
    a {
      margin: 10px;
      color: rgb(66, 66, 66);
    }
  }
}
</style>
