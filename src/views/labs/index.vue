<template>
  <div class="app-labs-page">
    <!-- 面包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">某实验室名称</li>
      </ol>
    </nav>
    <!-- 实验室信息 -->
    <div class="labs-info">
      <p class="desc">参加测试大赛 招新人数 联系人电话</p>
      <button class="btn btn-primary"><RouterLink to="/">加入他们</RouterLink></button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppLabsPage'
}
</script>
<style lang="less" scoped>
.app-labs-page {
  nav {
    margin: 10px 0;
    font-size: 18px;
  }
}
</style>
