<template>
  <div class="home-hot">
    <HomePanel title="最新实验室" subTitle="加入实验室 动力满满">
      <template #right><AppMore path="/labs" /></template>
      <ul v-if="hotlist.length > 0" class="labs-list row row-cols-1 row-cols-md-3 row-cols-xl-4">
        <li v-for="item in hotlist" :key="item.id" class="col">
          <div class="card" style="width: 100%">
            <img :src="item.image" class="card-img-top" alt="实验室图片" />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">{{ item.introduce }}</p>
              <RouterLink :to="`/labs/${item.id}`" class="btn btn-primary mybtn">查看详情</RouterLink>
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
import { getLab } from '@/api/labs'
export default {
  name: 'HomeHot',
  components: { HomePanel, AppMore },
  data() {
    return {
      hotlist: []
    }
  },
  mounted() {
    this.getHotList()
  },
  methods: {
    async getHotList() {
      const data = await getLab(-1)
      this.hotlist = data.slice(-4)
    }
  }
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
        img {
          height: 180px;
        }
        .card-body {
          width: 100%;
          height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          p {
            width: 100%;
            line-height: 24px;
            text-indent: 28px; //控制缩进
            // white-space: nowrap; // 强制限制在一行
            display: -webkit-box; /*必须结合的属性,将对象作为弹性伸缩盒子模型显示*/
            -webkit-line-clamp: 3; /*设置多少行*/
            -webkit-box-orient: vertical; /*必须结合的属性,设置或检索伸缩盒对象的子元素的排列方式*/
            overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
            text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
          }
          .btn {
            max-width: 80px;
          }
        }
      }
    }
  }
}
</style>
