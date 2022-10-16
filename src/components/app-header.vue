<template>
  <div class="app-header">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd">
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
              <a class="nav-link active" aria-current="page" href="#">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">公告信息</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">讨论区</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">招新信息</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
<style lang="less" scoped>
.app-header {
  margin-top: 10px;
  .container-fluid {
    align-items: center;
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
  }
}
</style>
