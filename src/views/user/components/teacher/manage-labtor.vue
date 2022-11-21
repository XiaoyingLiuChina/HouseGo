<template>
  <div class="manage-labtor">
    <div class="card">
      <div class="card-header">
        <h3>管理投递信息</h3>
      </div>
      <div class="card-body">
        <div class="card-title">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="人员关键词" />
            <button class="btn btn-primary" type="button" id="button-addon2">搜索</button>
          </div>
        </div>
        <div style="overflow: scroll; width: 960px">
          <table class="table table-hover table-bordered text-nowrap" v-if="list">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">方向</th>
                <th scope="col">对象</th>
                <th scope="col">招新描述</th>
                <th scope="col">学生姓名</th>
                <th scope="col">学生学号</th>
                <th scope="col">学生头像</th>
                <th scope="col">联系方式</th>
                <th scope="col">绩点</th>
                <th scope="col">志愿一</th>
                <th scope="col">志愿二</th>
                <th scope="col">截止时间</th>
                <th scope="col">状态</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in list" :key="item">
                <th scope="row">{{ index }}</th>
                <td v-if="item.recruit">{{ item.recruit.direction }}</td>
                <td v-if="item.recruit">{{ item.recruit.people }}</td>
                <td v-if="item.recruit" class="introduce">{{ item.recruit.introduce }}</td>
                <td v-if="item.student">{{ item.student.name }}</td>
                <td v-if="item.student">{{ item.student.id }}</td>
                <td v-if="item.student"><img :src="item.student.image" /></td>
                <td v-if="item.student">{{ item.student.telephone }}</td>
                <td v-if="item.resume">{{ item.resume.grades }}</td>
                <td v-if="item.resume">{{ item.resume.volunteerone }}</td>
                <td v-if="item.resume">{{ item.resume.volunteertwo }}</td>
                <td v-if="item.recruit">{{ item.recruit.endtime }}</td>
                <!-- vue 3.0废除了 -->
                <!-- <td v-if="item.deliver">{{ item.deliver.state | filterState }}</td> -->
                <td v-if="item.deliver" style="color: red">{{ filterState(item.deliver.state) }}</td>
                <td v-if="item.deliver">
                  <button class="btn btn-secondary btn-sm" v-if="item.deliver.state == 1" @click="refuseMyDeliver(item.deliver.id)">拒绝</button>
                  <button class="btn btn btn-success btn-sm" v-if="item.deliver.state == 1" @click="agreeMyDeliver(item.deliver.id)">同意</button>
                  <button class="btn btn-primary btn-sm">查看</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDeliverByTeacher, refuseDeliver, agreeDeliver } from '@/api/deliver'
export default {
  name: 'ManageLabtor',
  data() {
    return {
      list: {}
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getDeliverByTeacher()
      this.list = data
      console.log(data)
    },
    async refuseMyDeliver(id) {
      const data = await refuseDeliver(id)
      if (data === 2) {
        this.$message({ type: 'success', text: '拒绝成功' })
      }
    },
    async agreeMyDeliver(id) {
      const data = await agreeDeliver(id)
      if (data === 3) {
        this.$message({ type: 'success', text: '同意成功，等待学生确认' })
      }
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
    }
  }
}
</script>
<style lang="less" scoped>
/* 添加table滚动条 */
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
button {
  margin-right: 5px;
}
.card-title {
  width: 40%;
}
input {
  display: block;
  padding: 5px 5px;
  width: 250px;
  height: 33px;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
}
img {
  width: 50px;
  height: 50px;
}
</style>
