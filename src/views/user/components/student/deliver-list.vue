<template>
  <div class="deliver-list">
    <div class="card">
      <div class="card-header">
        <h3>投递列表</h3>
      </div>
      <div class="card-body" style="overflow: scroll; width: 960px">
        <table class="table table-hover table-bordered" v-if="list.length > 0" :key="list">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">实验室</th>
              <th scope="col">招新描述</th>
              <th scope="col">方向</th>
              <th scope="col">对象</th>
              <th scope="col">联系方式</th>
              <th scope="col">投递时间</th>
              <th scope="col">截止时间</th>
              <th scope="col">状态</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="item">
              <th scope="row">{{ index }}</th>
              <td v-if="item.laboratory">{{ item.laboratory.name }}</td>
              <td v-if="item.recruit" class="introduce">{{ item.recruit.introduce }}</td>
              <td v-if="item.recruit">{{ item.recruit.direction }}</td>
              <td v-if="item.recruit">{{ item.recruit.people }}</td>
              <td v-if="item.teacher">{{ item.teacher.telephone }}</td>
              <td v-if="item.deliver">{{ item.deliver.time }}</td>
              <td v-if="item.recruit">{{ item.recruit.endtime }}</td>
              <!-- vue 3.0废除了 -->
              <!-- <td v-if="item.deliver">{{ item.deliver.state | filterState }}</td> -->
              <td v-if="item.deliver" style="color: red">{{ filterState(item.deliver.state) }}</td>
              <td v-if="item.deliver">
                <button class="btn btn-warning btn-sm" v-if="item.deliver.state == 1 || item.deliver.state == 3" @click="backMyDeliver(item.deliver.id)">撤销</button>
                <button class="btn btn-secondary btn-sm" v-if="item.deliver.state == 3" @click="refuseMyDeliver(item.deliver.id)">拒绝</button>
                <button class="btn btn btn-success btn-sm" v-if="item.deliver.state == 3" @click="agreeMyDeliver(item.deliver.id)">同意</button>
                <button class="btn btn btn-danger btn-sm" v-if="item.deliver.state != 1 && item.deliver.state != 3" @click="deleteMyDeliver(item.deliver.id)">删除</button>
                <button class="btn btn-primary btn-sm" @click="lookMyMes(item)">查看</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <p>还没有投递任何实验室，快去寻找感兴趣的实验室吧</p>
        </div>
      </div>
      <el-dialog v-model="dialogTableVisible" title="详情信息">
        <div>实验室信息</div>
        <div class="info">
          <div class="mes">
            <p>名称：{{ lookMes.laboratory.name }}</p>
            <p>实验室介绍:{{ lookMes.laboratory.introduce }}</p>
            <p>所属学院：{{ lookMesCollege }}</p>
            <p>规模:{{ lookMes.laboratory.scale }}</p>
            <p>地址：{{ lookMes.laboratory.site }}</p>
            <p>负责人：{{ lookMes.teacher.name }}</p>
            <p>联系方式：{{ lookMes.teacher.telephone }}</p>
          </div>
          <img :src="lookMes.laboratory.image" alt="实验室图片" />
        </div>
        <div>招新信息</div>
        <div class="info">
          <div class="mes">
            <p>招新介绍：{{ lookMes.recruit.introduce }}</p>
            <p>招新方向：{{ lookMes.recruit.direction }}</p>
            <p>预计招新人数：{{ lookMes.recruit.recruitenumber }}</p>
            <p>对象：{{ lookMes.recruit.people }}</p>
            <p>截止时间：{{ lookMes.recruit.endtime }}</p>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getStudentDeliver, backDeliver, deleteDeliver, refuseDeliver, agreeDeliver } from '@/api/deliver'
import { getCollege } from '@/api/user'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'DeliverList',
  data() {
    return {
      list: {},
      dialogTableVisible: false,
      lookMes: null,
      lookMesCollege: ''
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getStudentDeliver()
      this.list = data
    },
    async lookMyMes(item) {
      this.lookMes = item
      this.dialogTableVisible = true
      const data = await getCollege(item.laboratory.collegeid)
      this.lookMesCollege = data[0].name
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
    async backMyDeliver(id) {
      ElMessageBox.confirm('是否撤销投递？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await backDeliver(id)

          if (data === '撤销成功') {
            this.getList()
            ElMessage({
              type: 'success',
              message: '撤销成功!'
            })
          }
        })
        // .then((data) => {
        //   // console.log(data)
        //   // 取消操作
        // })
        .catch(function (err) {
          console.log(err)
          // 捕获异常
        })
    },
    async deleteMyDeliver(id) {
      ElMessageBox.confirm('删除该条投递记录？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await deleteDeliver(id)
          if (data === '删除成功') {
            ElMessage({ type: 'success', message: '删除成功！' })
          }
        })
        .catch(function (err) {
          console.log(err)
          // 捕获异常
        })
    },
    async refuseMyDeliver(id) {
      ElMessageBox.confirm('放弃加入该实验室？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await refuseDeliver(id)
          if (data === 4) {
            ElMessage({ type: 'success', message: '拒绝成功' })
          }
        })
        .catch(function (err) {
          console.log(err)
          // 捕获异常
        })
    },
    async agreeMyDeliver(id) {
      ElMessageBox.confirm('确认加入该实验室？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await agreeDeliver(id)
          if (data === 5) {
            ElMessage({ type: 'success', message: '恭喜你成功加入该实验室，重新登录就可以发布分享了' })
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
table {
  min-width: 700px;
  .introduce {
    max-width: 150px;
    overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
    text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
  }
  tbody {
    th,
    td {
      vertical-align: middle;
    }
  }
}
.info {
  display: flex;
  justify-content: space-between;
  .mes {
    max-width: 60%;
  }
  img {
    height: 150px;
    width: 150px;
  }
}
</style>
