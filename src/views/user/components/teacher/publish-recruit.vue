<template>
  <div class="card teacher-getnew">
    <div class="card-header"><h3>发布招新信息</h3></div>
    <div class="card-body">
      <form @submit.prevent="publishMyRecruit">
        <div class="first-row row mb-2">
          <div class="input-group">
            <span class="input-group-text">招新方向</span>
            <input type="text" class="form-control" id="direction" name="direction" v-model="recruitMessage.direction" min="0" maxlength="6" />
          </div>
          <div class="input-group">
            <span class="input-group-text">招新人数</span>
            <input type="number" class="form-control" id="recruitnumber" name="recruitnumber" @change="onInput" v-model="recruitMessage.recruitenumber" min="0" />
          </div>
          <div class="input-group">
            <label class="input-group-text" for="inputGroupSelect01">招新对象</label>
            <select class="form-select" id="inputGroupSelect01" v-model="recruitMessage.people">
              <option value=""></option>
              <option value="大一">大一</option>
              <option value="大二">大二</option>
              <option value="大三">大三</option>
              <option value="大四">大四</option>
              <option value="研一">研一</option>
              <option value="研二">研二</option>
              <option value="研三">研三</option>
            </select>
          </div>
        </div>
        <div class="row mb-2">
          <div class="input-group">
            <span class="input-group-text">招新介绍</span>
            <textarea type="text" class="form-control introduce" id="introduce" name="introduce" v-model="recruitMessage.introduce" />
          </div>
        </div>
        <div class="row mb-2 endtime">
          <div class="input-group">
            <span class="input-group-text">截止时间</span>
            <input type="datetime-local" class="form-control endtime" id="endtime" name="endtime" step="1" v-model="recruitMessage.endtime" @change="setStopTime" :min="minTime" />
          </div>
        </div>
        <button class="btn btn-primary" type="reset">重置</button>
        <button class="btn btn-primary" type="submit">发布招新信息</button>
      </form>
    </div>
  </div>
</template>
<script>
import { publishRecruit } from '@/api/recruit'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'PublishRecruit',
  data() {
    return {
      recruitMessage: {
        direction: '',
        people: '',
        recruitenumber: '',
        endtime: '',
        introduce: ''
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
    // 选择截止时间之后的逻辑
    setStopTime() {
      // 将选择的时间与当前时间比较
      let putTime = this.recruitMessage.endtime.replace('T', ' ')
      putTime = putTime.replace('-', '/')
      const putDate = new Date(putTime)
      const nowTime = new Date()
      // 小于当前时间，不符合
      if (putDate < nowTime) {
        ElMessage({ type: 'warn', text: '请选择合适的截止日期！' })
        this.recruitMessage.endtime = ''
      } else {
        // 设置成功
        console.log('ok')
      }
    },
    async publishMyRecruit() {
      ElMessageBox.confirm('确认发布该招新信息？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const endtime = this.recruitMessage.endtime.replace('T', ' ')
          const putRecruit = {}
          Object.assign(putRecruit, this.recruitMessage, { endtime })
          const data = await publishRecruit(putRecruit)
          if (data === true) {
            ElMessage({ type: 'success', message: '招新信息发布成功' })
          }
        })
        .catch(function (err) {
          console.log(err)
          ElMessage({ type: 'error', message: '发布失败' })
        })
    },
    fillZero(t) {
      return t < 10 ? '0' + t : t
    }
  }
}
</script>
<style lang="less" scoped>
.first-row {
  .input-group {
    width: 180px;
  }
}
input {
  padding: 5px 5px;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
}
.input-group {
  width: 60%;
  .introduce {
    height: 160px;
  }
}
.endtime {
  .input-group {
    width: 300px;
  }
}
button {
  margin-right: 15px;
}
</style>
