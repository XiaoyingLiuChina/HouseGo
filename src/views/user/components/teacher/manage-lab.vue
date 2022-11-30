<template>
  <div class="manage-lab">
    <div class="card">
      <div class="card-header">
        <h3>实验室简介</h3>
      </div>
      <div class="card-body">
        <div class="show-box" v-if="myLab" v-show="!editbox" :key="myLab">
          <h4>实验室信息</h4>
          <div class="mb-3">实验室名称：{{ myLab.name }}</div>
          <div class="mb-3">所属学院：{{ myCollege.name }}</div>
          <div class="mb-3">实验室地址：{{ myLab.site }}</div>
          <div class="mb-3">实验室规模：{{ myLab.scale }}(人)</div>
          <div class="mb-3">实验室简介：{{ myLab.introduce }}</div>
          <div class="mb-3">
            实验室图片：
            <div><img :src="myLab.image" alt="实验室图片" /></div>
          </div>

          <!-- <button class="btn btn-primary" @click="deleteLab">删除实验室</button> -->
          <button class="btn btn-primary" @click="editbox = true">编辑实验室信息</button>
        </div>
        <div class="nobox" v-else v-show="!editbox">
          <p class="mb-3">您还没有负责的实验室，快来创建一个实验室吧</p>
          <button class="btn btn-primary" @click="editbox = true">添加实验室</button>
        </div>
        <div class="editbox" v-show="editbox">
          <LabEdit :key="myLab" />
          <button class="btn btn-primary" @click="backLab">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LabEdit from './lab-edit.vue'
import { deleteLab, getLabByTeacher } from '@/api/labs'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'ManageLab',
  components: { LabEdit },
  data() {
    return {
      myLab: this.$store.state.user.profile.lab,
      myCollege: this.$store.state.user.profile.college,
      editbox: false
    }
  },
  mounted() {
    this.updateData()
  },
  methods: {
    async deleteLab() {
      ElMessageBox.confirm('确认删除该实验室？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await deleteLab(this.$store.state.user.profile.laboratoryid)
          if (data === true) {
            ElMessage({ type: 'success', message: '删除实验室成功' })
          }
        })
        .catch(function (err) {
          console.log(err)
          // ElMessage({ type: 'error', message: '删除实验室失败' })
        })
    },
    async updateData() {
      const lab = await getLabByTeacher(this.$store.state.user.profile.id)
      this.$store.commit('user/setUser', { lab })
      this.myLab = lab
    },
    backLab() {
      this.editbox = false
      this.updateData()
    }
  }
}
</script>
<style lang="less" scoped>
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
button {
  margin-right: 15px;
}
img {
  height: 150px;
}
</style>
