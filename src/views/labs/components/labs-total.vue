<template>
  <div class="labs-total">
    <!-- 面包屑 -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">全部实验室</li>
      </ol>
    </nav>
    <ul class="labs-list row row-cols-1 row-cols-md-3 row-cols-xl-4" :key="list">
      <li v-for="(item, index) in list" :key="index" class="col">
        <div class="card" style="width: 100%">
          <img :src="item.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.introduce }}</p>
            <RouterLink :to="`/labs/${item.id}`" class="btn btn-primary">查看详情</RouterLink>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getLabList } from '@/api/labs'
export default {
  name: 'LabsTotal',
  data() {
    return {
      list: this.$store.state.lab.lablist
    }
  },
  mounted() {
    // console.log(this.$store.state.lab.lablist)
    this.getList()
  },
  methods: {
    async getList() {
      const values = {
        search: ''
      }
      const data = await getLabList(values)
      this.list = data
      this.$store.dispatch('lab/setLabList', data)
    }
  }
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
</style>
