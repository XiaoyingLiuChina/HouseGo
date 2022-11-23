<template>
  <div class="recruit row container">
    <div class="choice"><h4>已选标签：</h4></div>
    <recruitFilterVue :list="mylist" :key="mylist" @updatelist="filterList" />
    <div ref="target" class="col-10 recruit-list">
      <RouterLink v-for="item in list" class="card mb-2" :key="item.id" :to="`/recruit/${item.recruit.id}`">
        <div class="card-body">
          <div class="firstrow">
            <div>
              <h5 class="card-title">{{ item.laboratory.name }}</h5>
              <p class="card-text mb-2">{{ item.recruit.introduce }}</p>
            </div>
            <img :src="item.laboratory.image" class="img-thumbnail" />
          </div>
          <div class="card-bottom mb-2 text-muted">
            <div class="tag">{{ item.recruit.direction }}</div>
            <div class="time">发布日期：{{ item.recruit.starttime }}</div>
            <div class="time">截止日期：{{ item.recruit.endtime }}</div>
          </div>
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
  },
  methods: {
    async getList() {
      const data = await getRecruit(-1)
      this.mylist = data.reverse()
    },
    filterList(newlist) {
      this.list = newlist
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 240px;
  .card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .firstrow {
      display: flex;
      justify-content: space-between;
      & > div {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
      }
      img {
        padding-right: 10px;
        width: 250px;
        height: 190px;
      }
    }
  }
  .hoverShadow ();

  .card-bottom {
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
  .choice {
    margin: 10px auto;
  }
  .recruit-list {
    margin-top: 10px;
  }
  .nolist {
    text-align: center;
    color: gray;
    font-size: 28px;
  }
}
</style>
