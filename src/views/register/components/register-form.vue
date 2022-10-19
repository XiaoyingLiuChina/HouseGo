<template>
  <div class="register-form">
    <h3>注册账号</h3>
    <form @submit.prevent="login()">
      <div class="row">
        <div class="col">
          <label for="account" class="col-form-label">学号</label>
          <div class="account">
            <input type="text" class="form-control" id="account" name="account" v-model.trim="userinfo.account" autocomplete="off" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <label for="name" class="col-form-label">姓名</label>
          <div class="name">
            <input type="text" class="form-control" id="name" name="name" v-model.trim="userinfo.name" autocomplete="off" />
          </div>
        </div>
        <div class="col">
          <label for="cls" class="col-form-label">班级</label>
          <div class="cls">
            <input type="text" class="form-control" id="cls" name="cls" v-model.trim="userinfo.cls" autocomplete="off" />
          </div>
        </div>
      </div>

      <div class="row">
        <label for="pw" class="col-form-label">密码</label>
        <div class="pw">
          <input type="password" class="form-control" id="pw" name="pw" v-model.trim="userinfo.pw" />
        </div>
      </div>

      <div class="row">
        <label for="pw2" class="col-form-label">确认密码</label>
        <div class="pw2">
          <input type="password" class="form-control" id="pw2" name="pw2" v-model.trim="userinfo.pw2" />
        </div>
      </div>
      <div class="row">
        <label for="pw" class="col-form-label">手机号码</label>
        <div class="pw">
          <input type="password" class="form-control" id="pw2" name="phone" v-model.trim="userinfo.phone" />
        </div>
      </div>
      <div class="row" style="height: 40px">
        <div class="gree col">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="greeCheck" name="greeCheck" v-model="userinfo.isgree" />
            <label class="form-check-label" for="greeCheck"> 是否同意协议? </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">注册</button>
    </form>
  </div>
</template>
<script>
// import { useRoute } from 'vue-router'
export default {
  name: 'LoginForm',
  data() {
    return {
      userinfo: {
        account: '',
        academy: '',
        pw: '',
        sex: '',
        type: '',
        isgree: false,
        phone: ''
      }
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.register-form {
  background-color: @appColor;
  padding: 25px 10px;
  border-radius: 10px;

  h3 {
    text-align: center;
    margin: 10px auto;
  }
  form {
    .row {
      height: 40px;
      margin: 15px 10px;
      .form-control {
        line-height: 2;
        padding: 0px 5px;
      }

      .gree {
        display: flex;
        justify-content: flex-end;
        align-items: center;
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
