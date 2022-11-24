<template>
  <div class="login-form">
    <h3>账号登录</h3>
    <!-- <form @submit.prevent="login()"> -->
    <Form class="userinfo" :validation-schema="mySchema" autocomplete="off" v-slot="{ errors }" @submit="login">
      <div class="row">
        <label for="account" class="col-sm-2 col-form-label align-self-center">学号</label>
        <div class="col align-self-center">
          <div class="errorShow" v-if="errors.id"><i class="bi bi-exclamation-triangle" />{{ errors.id }}</div>
        </div>
        <Field :class="{ error: errors.id }" class="form-control" name="id" id="id" type="text" placeholder="请输入学号" />
      </div>
      <div class="row">
        <label for="pw" class="col-sm-2 col-form-label align-self-center">密码</label>
        <div class="col align-self-center">
          <div class="errorShow" v-if="errors.password"><i class="bi bi-exclamation-triangle" />{{ errors.password }}</div>
        </div>
        <Field :class="{ error: errors.password }" class="form-control" name="password" type="password" placeholder="请输入密码" />
      </div>
      <div class="row" style="height: 30px; padding-left: calc(var(--bs-gutter-x) * 0.5)">
        <div class="col-6 align-self-center">
          <div class="errorShow" v-if="errors.type"><i class="bi bi-exclamation-triangle" />{{ errors.type }}</div>
        </div>
        <div class="form-check col-3 align-self-center">
          <Field :class="{ error: errors.type }" class="form-check-input" type="radio" name="type" id="student" value="1" />
          <label class="form-check-label" for="student"> 学生 </label>
        </div>
        <div class="form-check col-3 align-self-center">
          <Field :class="{ error: errors.type }" class="form-check-input" type="radio" name="type" id="teacher" value="0" />
          <label class="form-check-label" for="teacher"> 老师</label>
        </div>
      </div>
      <div class="row last-row" style="height: 30px">
        <div class="forget col"><span @click="ResetPassword">忘记密码？</span></div>
        <div class="gree col-9">
          <div class="errorShow" v-if="errors.isAgree">
            <i class="bi bi-exclamation-triangle" />
            {{ errors.isAgree }}
          </div>
          <div class="form-check">
            <Field class="form-check-input" :class="{ error: errors.isAgree }" type="checkbox" name="isAgree" value="true" />
            <label class="form-check-label" for="greeCheck"> 是否同意协议? </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">登录</button>
    </Form>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate'
import veeSchema from '@/utils/vee-validate-schema'
import { getStudent, userLogin } from '@/api/user'
import { ElMessage } from 'element-plus'
export default {
  name: 'LoginForm',
  components: {
    Form,
    Field
  },
  data() {
    return {
      mySchema: {
        id: veeSchema.id,
        password: veeSchema.password,
        type: veeSchema.type,
        isAgree: veeSchema.isAgree
      }
    }
  },
  methods: {
    async login(values) {
      if (values) {
        try {
          console.log('发起了登录请求')
          const data = await userLogin(values)
          if (data === '登录成功') {
            this.$store.state.user.profile.token = 'dengluchenggong'
            // // 存储用户信息
            const { id, type } = values
            // this.$store.commit('user/setUserType', { id, type })

            // 存储用户信息
            if (values.type === '0') {
              this.$store.commit('user/setUserType', { id, type })
            } else {
              const { typel } = await getStudent(values.id)
              this.$store.commit('user/setUserType', { id, type, typel })
            }

            // 进行跳转
            this.$router.push({ path: '/user' })
            // 成功消息提示
            ElMessage({ type: 'success', message: '登录成功！' })
          } else if (data === '不存在该账号') {
            if (values.type === '1') {
              ElMessage({ type: 'warning', message: '不存在该账号的学生' })
            } else ElMessage({ type: 'warning', message: '不存在该账号的老师' })
          } else {
            ElMessage({ type: 'warning', message: '密码错误！请重新输入密码' })
          }
        } catch (error) {
          ElMessage({ type: 'warning', message: '发生错误，登录失败！请重试' })
        }
      }
    },
    async ResetPassword() {
      // const account = document.getElementById('id')
      // if (/^5120(\d){6}$/.test(account.value)) {
      //   console.log('即将重置密码')
      //   try {
      //     const password = {}
      //     password.password = '000000'
      //     const data = await updatePassword(password)
      //     console.log(data)
      //     if (data === true) {
      //       ElMessage({ type: 'success', message: '重置密码成功' })
      //     }
      //   } catch (error) {
      //     ElMessage({ type: 'warning', message: '重置密码出错，请重试' })
      //   }
      // } else {
      //   ElMessage({ type: 'warning', message: '请检查学号是否正确' })
      // }
    }
  }
}
</script>
<style lang="less" scoped>
.login-form {
  background-color: @appColor;
  padding: 25px 10px;
  border-radius: 10px;
  position: relative;
  h3 {
    text-align: center;
    margin: 10px auto;
  }
  form {
    input {
      &.error {
        border: 1px solid red;
      }
    }
    .errorShow {
      color: red;
      font-size: 8px;
      text-align-last: end;
    }
    .row {
      height: 80px;
      margin: 15px 20px;

      .form-control {
        line-height: 2;
        padding: 0px 8px;
      }

      .gree {
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .forget {
        display: flex;
        align-items: center;
        padding-right: 0;
      }
    }
    button[type='submit'] {
      display: block;
      width: 100px;
      height: 30px;
      text-align: center;
      margin: 0 auto;
    }
  }
  .last-row {
    font-size: 12px;
  }
}
</style>
