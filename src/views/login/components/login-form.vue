<template>
  <div class="login-form">
    <h3>账号登录</h3>
    <!-- <form @submit.prevent="login()"> -->
    <Form class="userinfo" :validation-schema="mySchema" autocomplete="off" v-slot="{ errors }">
      <div class="row">
        <label for="account" class="col-sm-2 col-form-label align-self-center">学号</label>
        <div class="col align-self-center">
          <div class="errorShow" v-if="errors.account"><i class="bi bi-exclamation-triangle" />{{ errors.account }}</div>
        </div>
        <Field :class="{ error: errors.account }" class="form-control" v-model.trim="userinfo.account" name="account" type="text" placeholder="请输入学号" />
      </div>
      <div class="row">
        <label for="pw" class="col-sm-2 col-form-label align-self-center">密码</label>
        <div class="col align-self-center">
          <div class="errorShow" v-if="errors.password"><i class="bi bi-exclamation-triangle" />{{ errors.password }}</div>
        </div>
        <Field :class="{ error: errors.password }" class="form-control" v-model.trim="userinfo.password" name="password" type="password" placeholder="请输入密码" />
      </div>
      <div class="row" style="height: 30px; padding-left: calc(var(--bs-gutter-x) * 0.5)">
        <div class="form-check col-4">
          <input class="form-check-input" type="radio" name="type" id="student" v-model="userinfo.type" value="student" />
          <label class="form-check-label" for="student"> 学生 </label>
        </div>
        <div class="form-check col-4">
          <input class="form-check-input" type="radio" name="type" id="teacher" v-model="userinfo.type" value="teacher" />
          <label class="form-check-label" for="teacher"> 老师</label>
        </div>
      </div>
      <div class="row" style="height: 30px">
        <div class="forget col"><span @click="forgetClick = !forgetClick">忘记密码？</span></div>
        <div v-if="forgetClick" class="dialog-forget">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">重置密码</h5>
              <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
              <p class="card-text">是否重置密码？重置后密码为：000000</p>
              <div class="card-bottom">
                <button class="btn btn-outline-primary btn-sm" @click="forgetClick = !forgetClick">取消</button>
                <button class="btn btn-outline-primary btn-sm" @click="ResetPassword">确定</button>
              </div>
            </div>
          </div>
        </div>
        <div class="gree col">
          <div class="form-check">
            <Field class="form-check-input" type="checkbox" name="isAgree" v-model="userinfo.isAgree" />
            <label class="form-check-label" for="greeCheck"> 是否同意协议? </label>
            <div class="errorShow" v-if="errors.isAgree">
              <i class="bi bi-exclamation-triangle" />
              {{ errors.isAgree }}
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="login">登录</button>
    </Form>
  </div>
</template>
<script>
import { Form, Field } from 'vee-validate'
import veeSchema from '@/utils/vee-validate-schema'
export default {
  name: 'LoginForm',
  components: {
    Form,
    Field
  },
  data() {
    return {
      userinfo: {
        account: '',
        password: '',
        type: '',
        isAgree: false
      },
      mySchema: {
        account: veeSchema.account,
        password: veeSchema.password,
        mobild: veeSchema.mobile,
        isAgree: veeSchema.isAgree
      },
      forgetClick: false
    }
  },
  methods: {
    login() {
      console.log(this.userinfo)
      if (this.userinfo.type === 'student') {
        this.$router.push('/student')
      } else if (this.userinfo.type === 'teacher') {
        this.$router.push('/teacher')
      } else {
        this.$message({ type: 'warn', text: '请选择登录类型' })
      }
    },
    ResetPassword() {
      console.log('重置密码')
      this.forgetClick = !this.forgetClick
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
    .errorShow {
      color: red;
      font-size: 8px;
      text-align-last: end;
    }
    .row {
      height: 80px;
      margin: 15px 20px;

      .dialog-forget {
        position: absolute;
        width: 300px;
        height: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .card-bottom {
          display: flex;
          margin: 10px 0 0 0;
        }
      }
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
      }
      input {
        &.error {
          border: 1px solid red;
        }
      }
    }
    button {
      display: block;
      width: 100px;
      height: 30px;
      text-align: center;
      margin: 0 auto;
    }
  }
}
</style>
