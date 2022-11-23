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
    <div v-if="list.length <= 0" class="spanno">没有搜索到相关实验室!</div>
  </div>
</template>
<script>
export default {
  name: 'LabsRelevant',
  data() {
    return {
      // list: this.$store.state.lab.searchlist
    }
  },
  mounted() {
    // this.list = this.$store.state.lab.searchlist
  },
  computed: {
    list() {
      return this.$store.state.lab.searchlist
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
.spanno {
  height: 380px;
  color: gray;
  margin-left: 15px;
  font-size: 28px;
  text-align: center;
  line-height: 300px;
}
</style>
