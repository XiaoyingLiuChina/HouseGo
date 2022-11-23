<template>
  <div class="user-info">
    <UserMine />
    <div class="card text-center">
      <div class="card-header"><h3>个人基本信息</h3></div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">工号：{{ user.id }}</li>
          <li class="list-group-item">姓名：{{ user.name }}</li>
          <li class="list-group-item" v-if="user.college">学院：{{ user.college.name }}</li>
          <li class="list-group-item" v-if="user.clas">班级：{{ user.clas }}</li>
          <li class="list-group-item" v-if="user.professionalTitle">职称：{{ user.professionalTitle }}</li>
          <li class="list-group-item" v-if="user.lab">
            目前所在实验室：{{ user.lab.name }}
            <button class="btn btn-primary" @click="exitMyLab" v-if="user.type === '1'">退出实验室</button>
          </li>
          <li class="list-group-item">
            手机号码：<Form :validation-schema="mySchema" autocomplete="off" v-slot="{ errors }" @submit="updateTelephone" class="phone">
              <Field type="text" name="mobile" id="mobile" class="form-control" v-model="user.telephone" />
              <button class="btn btn-primary" type="submit">修改手机</button>
              <div class="errorShow" v-if="errors.mobile">
                <i class="bi bi-exclamation-triangle" />
                {{ errors.mobile }}
              </div>
            </Form>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import UserMine from './user-mine.vue'
import { Form, Field } from 'vee-validate'
import veeSchema from '@/utils/vee-validate-schema'
import { updateUser } from '@/api/user'
import { exitLab } from '@/api/labs'
import store from '@/store/index'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'UserInfo',
  components: { UserMine, Field, Form },
  data() {
    return {
      user: store.state.user.profile,
      mySchema: {
        mobile: veeSchema.mobile
      }
    }
  },
  methods: {
    async updateTelephone(values) {
      ElMessageBox.confirm('确认修改联系方式？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const telephone = values.mobile
          const data = await updateUser({ telephone })
          if (data === true) {
            ElMessage({ type: 'success', message: '修改联系方式成功' })
          }
        })
        .catch(function (err) {
          console.log(err)
          ElMessage({ type: 'error', message: '修改失败' })
        })
    },
    exitMyLab() {
      ElMessageBox.confirm('是否要退出实验室？三思一下哦', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await exitLab()
          if (data === true) {
            ElMessage({ type: 'success', message: '退出成功,请重新登录' })
            this.$store.commit('user/deleteUser', {})
            this.$router.push('/login')
          }
          // const image = this.previewAvatar
          // const data = await updateUser({ image })
          // if (data === true) {
          //   this.$store.commit('user/updateAvatar', image)
          //   ElMessage({ type: 'success', message: '退出成功' })
          //   // 进行跳转
          //   this.$router.push({ path: '/user' })
          // }
        })
        .catch(function (err) {
          console.log(err)
          ElMessage({ type: 'error', message: '退出失败' })
        })
    }
  }
}
</script>
<style lang="less" scoped>
.user-info {
  .list-group-item {
    &:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        margin-left: 10px;
      }
    }
    input {
      display: block;
      padding: 5px 5px;
      width: 200px;
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
  }
  .phone {
    display: flex;
    align-items: center;
    .errorShow {
      color: red;
      font-size: 8px;
      text-align-last: end;
    }
  }
}
</style>
