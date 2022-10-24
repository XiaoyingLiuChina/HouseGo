<template>
  <div class="app-header">
    <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #e3f2fd">
      <div class="container-fluid">
        <span class="logo"><RouterLink class="navbar-brand" to="/">实验室招新系统</RouterLink></span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/">首页</RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">公告信息</a>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/tell">分享区</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/labs/renew">招新信息</RouterLink>
            </li>
          </ul>
          <slot />
          <form class="d-flex" role="search" @submit="searchLabs">
            <input class="form-control me-2" type="search" placeholder="搜索感兴趣的实验室" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    searchLabs() {
      this.$router.push('/search/2')
    }
  }
}
</script>
<style lang="less" scoped>
.app-header {
  // margin-top: 10px;
  .container-fluid {
    align-items: center;
    font-size: 18px;
    .logo {
      width: 140px;
      a {
        display: block;
        height: 88px;
        width: 100%;
        text-indent: -9999px;
        background: url(../assets/images/logo.png) no-repeat center / contain;
      }
    }
    form {
      input {
        padding: 5px;
      }
    }
  }
}
</style>
