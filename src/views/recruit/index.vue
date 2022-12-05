<template>
  <div class="recruit row container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">招新信息</li>
      </ol>
    </nav>
    <div class="choice"><h5>搜索已选标签：</h5></div>
    <recruitFilterVue :list="mylist" :key="mylist" @updatelist="filterList" />
    <div ref="target" class="col-10 recruit-list">
      <RouterLink v-for="item in list" class="card mb-2" :key="item.id" :to="`/recruit/${item.recruit.id}`">
        <div class="card-header">
          <h5 class="card-title">实验室名称：{{ item.laboratory.name }}</h5>
          <span>已投递人数：{{ item.recruit.applypeople }}</span>
        </div>
        <div class="card-body">
          <p class="card-text mb-2">招新介绍：{{ item.recruit.introduce }}</p>
          <img :src="item.laboratory.image" class="img-thumbnail" />
        </div>
        <!-- <div class="card-bottom mb-2 text-muted"> -->
        <div class="card-footer text-muted">
          <div class="tag">招新方向：{{ item.recruit.direction }}</div>
          <div class="time">发布日期：{{ item.recruit.starttime }}</div>
          <div class="time">截止日期：{{ item.recruit.endtime }}</div>
        </div>
      </RouterLink>
    </div>
    <div v-if="list.length <= 0" class="col-10 recruit-list nolist">没有搜索到相关招新信息!</div>
    <recruitRightnavVue class="col-2"></recruitRightnavVue>
  </div>
</template>
<script>
import recruitFilterVue from './components/recruit-filter.vue'
import recruitRightnavVue from './components/recruit-rightnav.vue'
import { getRecruit } from '@/api/recruit'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeRecruit',
  components: { recruitFilterVue, recruitRightnavVue },
  data() {
    return {
      mylist: ''
    }
  },
  setup() {
    const { target, result } = useLazyData(getRecruit)
    return { list: result, target }
  },
  mounted() {
    this.getList()
    document.documentElement.scrollTop = 0
  },
  methods: {
    async getList() {
      const data = await getRecruit(-1)
      this.mylist = data.reverse()
      console.log(this.mylist)
    },
    filterList(newlist) {
      this.list = newlist
    }
  }
}
</script>
<style lang="less" scoped>
nav {
  margin: 10px 0;
  font-size: 18px;
}
.card {
  .hoverShadow ();
  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .card-body {
    height: 100%;
    display: flex;
    justify-content: space-between;
    img {
      padding-right: 10px;
      width: 250px;
      height: 190px;
    }
  }

  .card-footer {
    color: #6c757d;
    font-size: 12px;
    span {
      margin-right: 8px;
      &:hover {
        color: green;
      }
    }
    display: flex;
    justify-content: space-between;
  }
}
.recruit {
  width: 100%;
  padding: 0;
  margin: 10px auto;
  .choice {
    margin: 10px auto;
  }
  .recruit-list {
    margin-top: 10px;
    background-color: @appColor;
  }
  .nolist {
    text-align: center;
    color: gray;
    font-size: 28px;
  }
}
</style>
