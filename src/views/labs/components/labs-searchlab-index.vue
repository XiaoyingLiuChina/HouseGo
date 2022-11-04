<template>
  <!-- 从搜索出来的相关实验室点击去的实验室详情 -->
  <div class="search-lab">
    <!-- 面包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/search/8">相关实验室</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">某实验室名称</li>
      </ol>
    </nav>
    <!-- 实验室信息 -->
    <div class="labs-info">
      <!-- 这里可以先展示简介 -->
      <LabsIntroduction />
      <!-- 再展示招新信息 -->
      <LabsRecruitInfo />
      <!-- <button class="btn btn-primary"><RouterLink to="/">加入他们</RouterLink></button> -->
    </div>
  </div>
</template>
<script>
import LabsIntroduction from './components/labs-introduction.vue'
import LabsRecruitInfo from './components/labs-recruit-lab.vue'
export default {
  name: 'AppLabsPage',
  components: { LabsIntroduction, LabsRecruitInfo }
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
