<template>
  <div class="labs-recruit-info">
    <h5 class="mb-3">实验室招新信息</h5>
    <div class="card">
      <table class="table">
        <thead>
          <tr>
            <th>编号</th>
            <th>招新方向</th>
            <th>招新人数</th>
            <th>招新介绍</th>
            <th>发布时间</th>
            <th>截止时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr :class="item.style" v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.restrit }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.say }}</td>
            <td>{{ item.openTime }}</td>
            <td>{{ item.stopTime }}</td>
            <td v-if="item.style != 'table-secondary'"><button class="btn btn-primary btn-sm">查看详情</button></td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LabsRecruitInfo',
  data() {
    return {
      list: [
        { id: '1', restrit: '前端', number: 2, say: 'css', openTime: '2022-10-15 17:05:42', stopTime: '2022-10-28 17:05:42' },
        { id: '2', restrit: '后端', number: 5, say: 'springboot', openTime: '2022-10-02 17:05:42', stopTime: '2022-10-22 17:05:42' },
        { id: '3', restrit: '测试', number: 5, say: 'selenium', openTime: '2022-10-02 17:05:42', stopTime: '2022-12-01 17:05:42' }
      ]
    }
  },
  mounted() {
    this.filterList()
  },
  methods: {
    // convertToDate(str) {
    // 2020-03-01
    //   return new Date(str.replace(/-/g, '/'))
    // }
    converToDate(str) {
      return new Date(str)
    },

    // 这个好像要在store里操作比较好
    filterList() {
      this.list.forEach((item) => {
        const temp = (new Date(item.stopTime) - new Date()) / 1000 / 60 / 60 / 24
        if (temp > 3) {
          item.style = 'table-success'
        } else if (temp < 0) {
          item.style = 'table-secondary'
        } else {
          item.style = 'table-danger'
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.card {
  margin: 15px;
}
</style>
