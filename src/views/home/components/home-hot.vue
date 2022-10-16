<template>
  <div class="home-hot">
    <HomePanel title="热门实验室" subTitle="加入实验室 动力满满">
      <template #right><AppMore path="/" /></template>
      <!-- 面板内容 -->
      <!-- <ul class="labs-list">
          <li v-for="(item, index) in 4" :key="index">
            <RouterLink to="/">
              <img src="@/assets/images/ma.png" alt="" />
              <p class="name ellipsis">12</p>
              <p class="price">555</p>
            </RouterLink>
          </li>
        </ul> -->

      <ul class="labs-list row row-cols-1 row-cols-md-2 row-cols-xl-4">
        <li v-for="(item, index) in 4" :key="index" class="col">
          <div class="card" style="width: 18rem">
            <img src="@/assets/images/ma.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">软件测试实验室</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <RouterLink :to="`/labs/${index}`" class="btn btn-primary">查看详情</RouterLink>
            </div>
          </div>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>
<script>
import HomePanel from './home-panel.vue'
import AppMore from '@/components/library/app-more.vue'
export default {
  name: 'HomeHot',
  components: { HomePanel, AppMore }
}
</script>
<style lang="less" scoped>
.home-hot {
  .labs-list {
    display: flex;
    justify-content: center;
  }
}
</style>
