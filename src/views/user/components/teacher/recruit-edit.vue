<template>
  <div class="recruit-edit">
    <h4>更新招新信息</h4>
    <form class="box" @submit.prevent="editMyRecruit">
      <div class="first-row row mb-1">
        <div class="input-group mb-1">
          <span class="input-group-text">招新方向</span>
          <input type="text" class="form-control" id="direction" name="direction" min="0" maxlength="6" v-model="needUpdate.direction" />
        </div>
        <div class="input-group mb-1">
          <span class="input-group-text">招新人数</span>
          <input type="number" class="form-control" id="recruitnumber" name="recruitnumber" min="0" v-model="needUpdate.recruitenumber" />
        </div>
        <div class="input-group mb-1">
          <label class="input-group-text" for="inputGroupSelect01">招新对象</label>
          <select class="form-select" id="inputGroupSelect01" v-model="needUpdate.people">
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
          <textarea type="text" class="form-control introduce" id="introduce" name="introduce" v-model="needUpdate.introduce" />
        </div>
      </div>
      <div class="row mb-2 endtime">
        <div class="input-group">
          <span class="input-group-text">截止时间</span>
          <input type="datetime-local" class="form-control endtime" id="endtime" name="endtime" step="1" @change="setStopTime" v-model="needUpdate.endtime" />
        </div>
      </div>
      <button class="btn btn-primary" @click="closeEvent">取消</button>
      <button class="btn btn-primary" type="submit">确认更新</button>
    </form>

    <div class="close"><button type="button" class="btn-close" aria-label="Close" @click="closeEvent"></button></div>
  </div>
</template>
<script>
import { editRecruit } from '@/api/recruit'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'RecruitEdit',
  emits: ['updateDialog', 'updateList'],
  data() {
    return {
      needUpdate: {}
    }
  },

  props: {
    oneRecruit: {
      type: Object
    }
  },
  mounted() {
    Object.assign(this.needUpdate, this.oneRecruit)
    this.needUpdate[0].recruit.endtime = this.needUpdate[0].recruit.endtime.replace(' ', 'T')
    this.needUpdate = this.needUpdate[0].recruit
  },

  methods: {
    async editMyRecruit() {
      ElMessageBox.confirm('确认更新招新信息？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const endtime = this.needUpdate.endtime.replace('T', ' ')
          const putRecruit = {}
          Object.assign(putRecruit, this.needUpdate, { endtime })
          const data = await editRecruit(putRecruit)
          if (data === true) {
            ElMessage({ type: 'success', message: '更新成功' })
            this.closeEvent()
            this.$emit('updateList')
          }
        })
        .catch(function (err) {
          console.log(err)
          ElMessage({ type: 'error', message: '更新失败' })
        })
    },
    closeEvent() {
      this.$emit('updateDialog')
    },
    // 选择截止时间之后的逻辑
    setStopTime() {
      // 将选择的时间与当前时间比较
      let putTime = this.needUpdate.endtime.replace('T', ' ')
      putTime = putTime.replace('-', '/')
      const putDate = new Date(putTime)
      const nowTime = new Date()
      // 小于当前时间，不符合
      if (putDate < nowTime) {
        ElMessage({ type: 'warn', message: '请选择合适的截止日期！' })
        this.needUpdate.endtime = ''
      } else {
        // 设置成功
        console.log('ok')
      }
    },
    fillZero(t) {
      return t < 10 ? '0' + t : t
    }
  }
}
</script>
<style lang="less" scoped>
.recruit-edit {
  position: fixed;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: calc(0.375rem - 1px);
  width: 400px;
  height: 320px;
  padding: 15px;
  .box {
    margin-top: 15px;
  }
  button {
    margin-right: 5px;
  }
  .close {
    position: absolute;
    top: 0;
    right: 0;
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
</style>
