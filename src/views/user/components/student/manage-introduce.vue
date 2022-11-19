<template>
  <div class="user-introduce">
    <div class="card">
      <div class="card-header">
        <h3>个人简介</h3>
      </div>
      <div class="card-body">
        <div class="show-box" v-if="myResume" v-show="!editbox" :key="myResume">
          <div class="row">
            <div class="mb-3 col-6">第一志愿： {{ myResume.volunteerone }}</div>
            <div class="mb-3 col-6">第一志愿： {{ myResume.volunteertwo }}</div>
            <div class="mb-3 col">绩点：{{ myResume.grades }}</div>
          </div>

          <div class="mb-3">自我评价：{{ myResume.introduce }}</div>
          <div class="mb-3">获奖情况：{{ myResume.reward }}</div>
          <button class="btn btn-primary" @click="deleteMyResume">删除简历</button>
          <button class="btn btn-primary" @click="editbox = true">编辑简历</button>
        </div>

        <div class="noresume-box" id="noresume-box" v-else v-show="!editbox">
          <p class="mb-3">暂时没有您的简历，开始编辑属于自己的简历吧</p>
          <button class="btn btn-primary" @click="editbox = true">添加简历</button>
        </div>
        <div v-show="editbox">
          <EditBox :key="myResume" />
          <button class="btn btn-primary" @click="editbox = false">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import EditBox from './edit-resume.vue'
import { getResume, deleteResume } from '@/api/resume'
export default {
  name: 'UserIntroduce',
  components: { EditBox },
  data() {
    return {
      myResume: null,
      editbox: false,
      addbox: false
    }
  },

  mounted() {
    this.getMyResume()
  },
  methods: {
    async getMyResume() {
      const data = await getResume(this.$store.state.user.profile.id)
      this.myResume = data
      this.$store.dispatch('user/setResume', data)
    },
    async deleteMyResume() {
      const data = await deleteResume(this.myResume.id)
      if (data === true) {
        this.$message({ type: 'success', text: '删除简历成功' })
      } else this.$message({ type: 'error', text: '发生错误，删除失败' })
    }
  },
  watch: {}
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
button {
  margin-right: 15px;
}
</style>
