<template>
  <div class="edit-box" v-if="resume">
    <div class="row">
      <div class="mb-3 col-6">
        <label for="volunteerone" class="form-label">第一志愿</label>
        <input type="text" class="form-control" v-model="resume.volunteerone" name="volunteerone" id="volunteerone" />
      </div>
      <div class="mb-3 col-6">
        <label for="volunteertwo" class="form-label">第二志愿</label>
        <input type="text" class="form-control" v-model="resume.volunteertwo" name="volunteertwo" />
      </div>
      <div class="mb-3 col">
        <label for="grades" class="form-label">绩点</label>
        <input type="number" class="form-control" v-model="resume.grades" name="grades" step="0.01" max="5.00" min="0" />
      </div>
    </div>
    <div class="mb-3">
      <label for="introduce" class="form-label">自我评价</label>
      <textarea class="form-control" v-model="resume.introduce" rows="3" name="introduce"></textarea>
    </div>
    <div class="mb-3">
      <label for="reward" class="form-label">获奖情况</label>
      <textarea class="form-control" v-model="resume.reward" name="reward" rows="3"></textarea>
    </div>
    <button class="btn btn-primary mb-3" @click="editMyResume" v-if="resume.id">修改简历</button>
    <button class="btn btn-primary mb-3" @click="addMyResume" v-else>添加简历</button>
  </div>
</template>
<script>
import { addResume, editResume } from '@/api/resume'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'EditBox',
  data() {
    return {
      resume: this.$store.state.user.profile.resume
    }
  },
  mounted() {
    if (!this.$store.state.user.profile.resume) {
      this.resume = {
        volunteerone: '',
        volunteertwo: '',
        introduce: '',
        grades: null,
        reward: ''
      }
    }
  },
  methods: {
    async addMyResume() {
      if (this.resume.grades > 5) {
        ElMessage({ type: 'warn', text: '绩点不能大于5' })
        this.resume.grades = 0
      } else {
        const data = await addResume(this.resume)
        if (data === true) {
          ElMessage({ type: 'success', message: '您已经成功添加了自己的简历！' })
          this.$router.go({ path: '/user/introduce' })
        } else {
          ElMessage({ type: 'error', message: '出错，添加未成功' })
        }
      }
    },
    async editMyResume() {
      if (this.resume.grades > 5) {
        ElMessage({ type: 'warn', text: '绩点不能大于5' })
        this.resume.grades = 0
      } else {
        ElMessageBox.confirm('确认修改个人简历？', '温馨提示', {
          iconClass: 'el-icon-question', // 自定义图标样式
          confirmButtonText: '确认', // 确认按钮文字更换
          cancelButtonText: '取消', // 取消按钮文字更换
          showClose: true, // 是否显示右上角关闭按钮
          type: 'warning' // 提示类型  success/info/warning/error
        })
          .then(async () => {
            const data = await editResume(this.resume)
            if (data === true) {
              ElMessage({ type: 'success', message: '修改成功！' })
              this.$router.go({ path: '/user/introduce' })
            }
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
}
</script>
<style lang="less" scoped>
input {
  display: block;
  padding: 5px 5px;
  width: 250px;
  height: 30px;
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
