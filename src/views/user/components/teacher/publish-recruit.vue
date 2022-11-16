<template>
  <div class="card teacher-getnew">
    <div class="card-header"><h3>发布招新信息</h3></div>
    <div class="card-body">
      <div class="first-row row mb-2">
        <div class="input-group">
          <span class="input-group-text">招新人数</span>
          <input type="number" class="form-control" id="num" name="num" v-model="recruitMessage.personNum" min="0" />
        </div>
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">招新对象</label>
          <select class="form-select" id="inputGroupSelect01" v-model="recruitMessage.personKind">
            <option value="2" selected>大二</option>
            <option value="1">大一</option>
            <option value="3">大三</option>
            <option value="4">大四</option>
          </select>
        </div>
      </div>
      <div class="row mb-2">
        <div class="input-group">
          <span class="input-group-text">截止时间</span>
          <input type="datetime-local" class="form-control" id="date" name="date" v-model="recruitMessage.stopTime" @change="setStopTime" :min="minTime" />
        </div>
      </div>
      <div class="row mb-2">
        <div class="input-group">
          <span class="input-group-text">招新介绍</span>
          <input type="text" class="form-control" id="message" name="message" v-model="recruitMessage.content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TeacherGetnew',
  data() {
    return {
      recruitMessage: {
        personNum: 0,
        personKind: '2',
        stopTime: '',
        content: '123'
      },
      minTime: ''
    }
  },
  mounted() {
    this.minTime = this.setMinTime()
    // this.recruitMessage.stopTime = this.setMinTime()
  },
  methods: {
    // 设置最小的截止时间
    setMinTime() {
      // 当前时间
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const hours = this.fillZero(date.getHours())
      const minutes = this.fillZero(date.getMinutes())
      // const seconds = this.fillZero(date.getSeconds())
      return year + '-' + month + '-' + day + 'T' + hours + ':' + minutes
    },
    fillZero(t) {
      return t < 10 ? '0' + t : t
    },

    // 选择截止时间之后的逻辑
    setStopTime() {
      // 将选择的时间与当前时间比较
      let putTime = this.recruitMessage.stopTime.replace('T', ' ')
      putTime = putTime.replace('-', '/')
      putTime += ':59'
      const putDate = new Date(putTime)
      const nowTime = new Date()
      // 小于当前时间，不符合
      if (putDate < nowTime) {
        this.$message({ type: 'warn', text: '请选择合适的截止日期！' })
        this.recruitMessage.stopTime = ''
      } else {
        // 设置成功
        console.log('ok')
      }
    }
  }
}
</script>
<style lang="less" scoped>
// .first-row {
//   .input-group {
//     width: 180px;
//     input {
//       padding: 5px 5px;
//       color: #212529;
//       background-color: #fff;
//       background-clip: padding-box;
//       border: 1px solid #ced4da;
//       -webkit-appearance: none;
//       -moz-appearance: none;
//       appearance: none;
//       border-radius: 0.375rem;
//     }
//   }
// }
.input-group {
  input {
    padding: 5px 10px;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
  }
}
</style>
