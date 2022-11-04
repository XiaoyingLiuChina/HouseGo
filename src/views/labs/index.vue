<template>
  <div class="app-labs-page">
    <!-- 面包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">某实验室名称</li>
      </ol>
    </nav>

    <LabsItem />
  </div>
</template>
<script>
import LabsItem from './components/labs-item.vue'
export default {
  name: 'AppLabsPage',
  components: { LabsItem }
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
