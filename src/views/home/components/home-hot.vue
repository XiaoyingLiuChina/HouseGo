<template>
  <div class="home-hot">
    <HomePanel title="热门实验室" subTitle="加入实验室 动力满满">
      <template #right><AppMore path="/" /></template>
      <ul v-if="true" class="labs-list row row-cols-1 row-cols-md-3 row-cols-xl-4">
        <li v-for="item in 4" :key="item" class="col">
          <div class="card" style="width: 100%">
            <img src="@/assets/images/ma.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">软件测试实验室</h5>
              <p class="card-text">软件测试实验室建立于2020年，现有20人，由潘娅老师带领</p>
              <RouterLink :to="`/labs/${item}`" class="btn btn-primary">查看详情</RouterLink>
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
  margin: 10px auto;
  .labs-list {
    display: flex;
    justify-content: space-between;
    li {
      .card {
        .hoverShadow ();
      }
    }
  }
}
</style>
