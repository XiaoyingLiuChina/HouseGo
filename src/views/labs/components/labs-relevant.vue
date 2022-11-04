<template>
  <div class="labs-relevant">
    <!-- 面包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">相关实验室</li>
      </ol>
    </nav>
    <ul class="labs-list row row-cols-1 row-cols-md-3 row-cols-xl-4">
      <li v-for="(item, index) in 10" :key="index" class="col">
        <div class="card" style="width: 100%">
          <img v-if="index % 2 == 0" src="@/assets/images/ma.png" class="card-img-top" alt="..." />
          <img v-else src="@/assets/images/logo.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">软件测试实验室</h5>
            <p class="card-text">潘娅老师带研究生很好哦</p>
            <RouterLink :to="`/labs/${index}`" class="btn btn-primary">查看详情</RouterLink>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'LabsRelevant'
}
</script>
<style lang="less" scoped>
nav {
  margin: 10px 0;
  font-size: 18px;
}
.labs-list {
  li {
    margin-bottom: 15px;
    img {
      height: 150px;
    }
  }
}
</style>
