<template>
  <div class="recruit-list card">
    <div class="card-header"><h3>招新信息列表</h3></div>
    <div class="card-body">
      <button class="btn btn-primary mb-3" @click="this.$router.push({ path: '/user/recruit' })">添加新的招新信息</button>
      <table class="table table-hover table-bordered" :key="this.list">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">方向</th>
            <th scope="col">对象</th>
            <th scope="col">描述</th>
            <th scope="col">招新人数</th>
            <th scope="col">已申请</th>
            <th scope="col">已通过</th>
            <th scope="col">发布时间</th>
            <th scope="col">截止时间</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.direction }}</td>
            <td>{{ item.people }}</td>
            <td class="introduce">{{ item.introduce }}</td>
            <td>{{ item.recruitenumber }}</td>
            <td>{{ item.applypeople }}</td>
            <td>{{ item.passpeople }}</td>
            <td>{{ item.starttime }}</td>
            <td>{{ item.endtime }}</td>

            <td>
              <button class="btn btn-secondary btn-sm" @click="deleteMyRecruit(item.id)">删除</button>
              <button class="btn btn-primary btn-sm" @click="editRecruit(item.id)">更新</button>
              <button class="btn btn-primary btn-sm" @click="showRecruit(item.id, index)">查看</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="studentlist.length > 0">
        <RecruitStudentlist :studentlist="studentlist" :index="index" />
      </div>
      <div v-else-if="studentlist.length === 0">
        <div class="card">
          <div class="card-header">
            <h5 v-if="index === -1">请选择一条招新信息</h5>
            <h5 v-else>招新信息编号：{{ index + 1 }}</h5>
          </div>
          <div class="card-body">您已经处理完毕，没有待审批的学生</div>
        </div>
      </div>
    </div>
    <RecruitShow v-if="showflag" :oneRecruit="oneRecruit" @updateDialog="parentClose" @showStudent="getStudentList" />
    <RecruitEdit v-if="editflag" :oneRecruit="oneRecruit" @updateDialog="parentClose" @updateList="getList" />
  </div>
</template>
<script>
import { getRecruitByTeacher, deleteRecruit, getRecruit } from '@/api/recruit'
import RecruitShow from './recruit-show.vue'
import RecruitEdit from './recruit-edit.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import RecruitStudentlist from './recruit-studentlist.vue'
export default {
  name: 'RecruitList',
  components: { RecruitShow, RecruitEdit, RecruitStudentlist },
  data() {
    return {
      list: null,
      showflag: false,
      editflag: false,
      oneRecruit: null,
      studentlist: [],
      index: -1,
      mindex: -1
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getRecruitByTeacher()
      this.list = data
    },
    filterState(value) {
      let res = ''
      switch (value) {
        case 1:
          res = '待审核'
          break
        case 2:
          res = '不通过'
          break
        case 3:
          res = '待确认'
          break
        case 4:
          res = '已拒绝'
          break
        case 5:
          res = '已加入'
          break
        case 6:
          res = '已结束'
          break
        default:
          res = '已删除'
          break
      }
      return res
    },
    async deleteMyRecruit(id) {
      ElMessageBox.confirm('确认删除该招新信息？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await deleteRecruit(id)
          if (data === true) {
            ElMessage({ type: 'success', message: '删除成功' })
            this.getList()
          }
        })
        .catch(function (err) {
          console.log(err)
          ElMessage({ type: 'error', message: '删除失败' })
        })
    },
    async showRecruit(id, index) {
      const data = await getRecruit(id)
      this.oneRecruit = data
      this.showflag = true
      this.mindex = index
    },
    async editRecruit(id) {
      const data = await getRecruit(id)
      this.oneRecruit = data
      this.editflag = true
    },
    getStudentList(data) {
      this.studentlist = data
      this.index = this.mindex
    },
    parentClose() {
      this.showflag = false
      this.editflag = false
    }
  }
}
</script>
<style lang="less" scoped>
button {
  margin-right: 5px;
}
.introduce {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
