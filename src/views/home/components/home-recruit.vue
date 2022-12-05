<template>
  <div class="home-recruit">
    <HomePanel title="最热招新" subTitle="多人投递 看看热闹">
      <template #right><AppMore path="/recruit" /></template>
      <ul v-if="list.length >= 4" :key="list" class="row row-cols-1 row-cols-md-3 row-cols-xl-4">
        <li class="col" v-for="item in list" :key="item.recruit.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ item.laboratory.name }}</h5>
              <p class="card-text">{{ item.recruit.introduce }}</p>
              <div class="btn-nice">
                <RouterLink :to="`/recruit/${item.recruit.id}`" class="btn btn-primary">查看详情</RouterLink>
                <span>已投递数：{{ item.recruit.applypeople }}</span>
              </div>
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
import { getRecruit } from '@/api/recruit'
export default {
  name: 'HomeRecruit',
  components: { HomePanel, AppMore },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getRecruit(-1)
      const newdata = data.sort(function (x, y) {
        return x.recruit.applypeople - y.recruit.applypeople
      })
      this.list = newdata.slice(-4).reverse()
    }
  }
}
</script>
<style lang="less" scoped>
.home-recruit {
  margin-top: 10px;
  // background-color: @appColor;
  width: 100%;
  height: 300px;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      // width: 100%;
      // padding: 5px 0;
      .card {
        .hoverShadow ();
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
          .btn-nice {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .btn {
              max-width: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
