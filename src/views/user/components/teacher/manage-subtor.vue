<template>
  <div class="manage-subtor">
    <div class="card">
      <div class="card-header">
        <h3>人员管理</h3>
      </div>
      <div class="card-body">
        <table class="table table-hover table-bordered text-nowrap" :key="list">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">学生学号</th>
              <th scope="col">学生姓名</th>
              <th scope="col">学生头像</th>
              <th scope="col">联系方式</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody v-if="list">
            <tr v-for="(item, index) in list" :key="index">
              <th scope="row">{{ index }}</th>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td><img :src="item.image" alt="学生照片" /></td>
              <td>{{ item.telephone }}</td>
              <td><button class="btn btn-primary" @click="deleteStudent(item.id)">删除</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { getLabStudentList } from '@/api/user'
import { exitLabStudent } from '@/api/labs'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'ManageSubtor',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getLabStudentList()
      this.list = data
    },
    deleteStudent(studentid) {
      ElMessageBox.confirm('确认将该学生从实验室删除？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await exitLabStudent(studentid)
          if (data === true) {
            ElMessage({ type: 'success', message: '操作成功' })
            this.getList()
          }
        })
        .catch(function (err) {
          console.log(err)
          // 捕获异常
        })
    }
  }
}
</script>
<style lang="less" scoped>
img {
  width: 60px;
  height: 60px;
}
tbody {
  th,
  td {
    vertical-align: middle;
  }
}
</style>
