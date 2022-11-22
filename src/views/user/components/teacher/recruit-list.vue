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
              <button class="btn btn-primary btn-sm" @click="showRecruit(item.id)">查看</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <RecruitShow v-if="showflag" :oneRecruit="oneRecruit" @updateDialog="parentClose" />
    <RecruitEdit v-if="editflag" :oneRecruit="oneRecruit" @updateDialog="parentClose" @updateList="getList" />
  </div>
</template>
<script>
import { getRecruitByTeacher, deleteRecruit, getRecruit } from '@/api/recruit'
import RecruitShow from './recruit-show.vue'
import RecruitEdit from './recruit-edit.vue'
export default {
  name: 'RecruitList',
  components: { RecruitShow, RecruitEdit },
  data() {
    return {
      list: null,
      showflag: false,
      editflag: false,
      oneRecruit: null
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
    async deleteMyRecruit(id) {
      this.$confirm('确认删除该招新信息？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await deleteRecruit(id)
          if (data === true) {
            this.$message({ type: 'success', message: '删除成功' })
            this.getList()
          }
        })
        .catch(function (err) {
          console.log(err)
          this.$message({ type: 'error', message: '删除失败' })
        })
    },
    async showRecruit(id) {
      const data = await getRecruit(id)
      this.oneRecruit = data
      this.showflag = true
    },
    async editRecruit(id) {
      const data = await getRecruit(id)
      this.oneRecruit = data
      this.editflag = true
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
