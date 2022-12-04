<template>
  <div class="calendar">
    <div class="title mb-2">当前时间</div>
    <div style="font-size: 40px">{{ getHms(date) }}</div>
    <div>{{ getWeekDate(date) }}</div>
    <div>{{ getYmd(date) }}</div>
  </div>
</template>

<script>
export default {
  name: 'AppTime',
  data() {
    return {
      date: new Date()
    }
  },
  methods: {
    getWeekDate(date) {
      var now = new Date(date)
      var day = now.getDay()
      var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      var week = weeks[day]
      return week
    },
    getYmd(time) {
      var date = new Date(time)
      var year = date.getFullYear()
      var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      var day = this.fillZero(date.getDate())
      // 拼接
      return year + '-' + month + '-' + day + ' '
    },
    fillZero(t) {
      return t < 10 ? '0' + t : t
    },
    getHms(time) {
      var date = new Date(time)
      var hours = this.fillZero(date.getHours())
      var minutes = this.fillZero(date.getMinutes())
      var seconds = this.fillZero(date.getSeconds())
      return hours + ':' + minutes + ':' + seconds
    }
  },
  mounted() {
    // 显示当前日期时间
    const _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date() // 修改数据date
    }, 1000)
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除定时器
    }
  }
}
</script>
<style lang="less" scoped>
.calendar {
  position: sticky;
  top: 116px;
  border-radius: 10px;
  background-color: @appColor;
  text-align: center;
  // padding: 10px;
  color: #5579b4;
  padding-bottom: 15px;
  .title {
    color: #fff;
    // text-align: center;
    background: #07889b;
    padding: 10px;
    font-size: 15px;
  }
}
</style>
