<template>
  <div class="app-topnav">
    <div class="container">
      <ul class="nav justify-content-end">
        <template v-if="user.token">
          <li class="nav-item">
            <RouterLink to="/user" class="nav-link"><i class="bi bi-person"></i>{{ user.name }}</RouterLink>
          </li>
          <li class="nav-item"><RouterLink to="/login" class="nav-link" @click="logout">退出登录</RouterLink></li>
        </template>
        <template v-else>
          <li class="nav-item"><RouterLink to="/login" class="nav-link">请先登录</RouterLink></li>
          <li class="nav-item"><RouterLink to="/register" class="nav-link">马上注册</RouterLink></li>
        </template>
        <li class="nav-item"><RouterLink class="nav-link" to="/user">个人中心</RouterLink></li>
        <li class="nav-item"><a class="nav-link" href="#">关于我们</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppTopnav',
  data() {
    return {
      user: this.$store.state.user.profile
    }
  },
  methods: {
    logout() {
      this.$store.commit('user/deleteUser', {})
      this.$store.commit('user/setResume', {})
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.app-topnav {
  width: 100%;
  background-color: #07889b;
}
.nav {
  width: 100%;
  .nav-item {
    display: flex;
    height: 50px;
    align-items: center;
    .hoverShadow();
    a {
      margin: 10px;
      color: #fff;
    }
    i {
      margin-right: 8px;
      color: red;
    }
  }
}
</style>
