<template>
  <div class="app-header">
    <nav class="navbar navbar-expand-sm navbar-light">
      <div class="container-fluid container">
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
              <RouterLink class="nav-link" exact :to="{ name: 'Home' }">首页</RouterLink>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">公告信息</a>
            </li> -->
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'Share' }">分享区</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" :to="{ name: 'Recruit' }">招新信息</RouterLink>
            </li>
          </ul>
          <slot />
          <Form class="d-flex" role="search" @submit="searchLabs" autocomplete="off">
            <Field class="form-control me-2" type="search" placeholder="搜索感兴趣的实验室" aria-label="Search" id="kw" name="kw" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </Form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate'
export default {
  name: 'AppHeader',
  components: { Form, Field },
  methods: {
    searchLabs(values) {
      console.log(this.$route)
      console.log(values)
      this.$router.push('/search/2')
    }
  }
}
</script>
<style lang="less" scoped>
.app-header {
  background-color: @appColor;
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
    .nav-item {
      margin: 0 15px;
    }
  }
}
.router-link-exact-active {
  color: #fff;
  background-color: #6ec884;
  border-radius: 15px;
}
</style>
