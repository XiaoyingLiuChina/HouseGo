<template>
  <div class="edit-box">
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
export default {
  name: 'EditBox',
  data() {
    return {
      resume: this.$store.state.user.myResume
    }
  },
  computed: {
    editResumes() {
      return this.$store.state.user.myResume
    }
  },

  methods: {
    async addMyResume() {
      if (this.resume.grades > 5) {
        this.$message({ type: 'warn', text: '绩点不能大于5' })
        this.resume.grades = 0
      } else {
        const data = await addResume(this.resume)
        if (data === true) {
          this.$message({ type: 'success', text: '您已经成功添加了自己的简历！' })
        } else {
          this.$message({ type: 'error', text: '出错，添加未成功' })
        }
      }
    },
    async editMyResume() {
      if (this.resume.grades > 5) {
        this.$message({ type: 'warn', text: '绩点不能大于5' })
        this.resume.grades = 0
      } else {
        const data = await editResume(this.resume)

        if (data === true) {
          this.$store.commit('user/setResume', data)
          this.$message({ type: 'success', text: '修改成功' })
        } else {
          this.$message({ type: 'error', text: '出错，修改未成功' })
        }
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
