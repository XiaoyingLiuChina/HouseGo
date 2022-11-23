<template>
  <!-- 实验室详情页：某一个实验室招新信息组件 -->
  <div class="labs-recruit-info">
    <h5 class="mb-3">实验室招新信息</h5>
    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th>编号</th>
            <th>招新方向</th>
            <th>招新人数</th>
            <th>招新对象</th>
            <th>招新介绍</th>
            <th>发布时间</th>
            <th>截止时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="item.style" v-for="(item, index) in recruitlist" :key="item.id">
            <td>{{ index }}</td>
            <td>{{ item.direction }}</td>
            <td>{{ item.recruitenumber }}</td>
            <td>{{ item.people }}</td>
            <td class="introduce">{{ item.introduce }}</td>
            <td>{{ item.starttime }}</td>
            <td>{{ item.endtime }}</td>
            <td v-if="item.style != 'table-secondary'"><button class="btn btn-primary btn-sm" @click="this.$router.push(`/recruit/${item.id}`)">查看详情</button></td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  // 这个是实验室详情页面
  name: 'LabsRecruitInfo',
  data() {
    return {}
  },
  props: {
    recruitlist: {
      type: Array
    }
  },
  mounted() {
    this.filterList()
  },
  methods: {
    converToDate(str) {
      return new Date(str)
    },

    // 这个好像要在store里操作比较好
    filterList() {
      this.recruitlist.forEach((item) => {
        const temp = (new Date(item.endtime) - new Date()) / 1000 / 60 / 60 / 24
        if (temp > 3) {
          item.style = 'table-success'
        } else if (temp < 0) {
          item.style = 'table-secondary'
        } else {
          item.style = 'table-danger'
        }
      })
      // this.list.forEach((item) => {
      //   const temp = (new Date(item.stopTime) - new Date()) / 1000 / 60 / 60 / 24
      //   if (temp > 3) {
      //     item.style = 'table-success'
      //   } else if (temp < 0) {
      //     item.style = 'table-secondary'
      //   } else {
      //     item.style = 'table-danger'
      //   }
      // })
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  margin: 15px;
}
.labs-recruit-info {
  background-color: @appColor;
}
.introduce {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
