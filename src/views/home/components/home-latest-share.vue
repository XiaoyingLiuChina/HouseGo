<template>
  <div class="latest-share">
    <HomePanel title="最新分享" subTitle="相互学习 天天进步一点点">
      <template #right><AppMore path="/" /></template>
      <ul v-if="true" class="labs-list row row-cols-1 row-cols-md-3 row-cols-xl-4">
        <li v-for="item in 4" :key="item" class="col">
          <div class="card" style="width: 100%">
            <img src="@/assets/images/ma.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">实验室第一天</h5>
              <p class="card-text">今天在实验室学习了selenium自动化测试</p>
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
  name: 'HomeLatestShare',
  components: { HomePanel, AppMore }
}
</script>
<style lang="less" scoped>
.latest-share {
  margin: 10px auto;
}
</style>
