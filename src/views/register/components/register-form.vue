<template>
  <div class="login-form">
    <h3>注册账号</h3>
    <form @submit.prevent="login()">
      <div class="row">
        <label for="account" class="col-form-label">学号</label>
        <div class="account">
          <input type="text" class="form-control" id="account" name="account" v-model.trim="userinfo.account" autocomplete="off" />
        </div>
      </div>
      <div class="row">
        <label for="pw" class="col-form-label">密码</label>
        <div class="pw">
          <input type="password" class="form-control" id="pw" name="pw" v-model.trim="userinfo.pw" />
        </div>
      </div>

      <!-- <RouterLink></RouterLink> -->
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
        pw: '',
        type: '',
        isgree: false
      }
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.login-form {
  background-color: @appColor;
  padding: 25px 10px;
  border-radius: 10px;

  h3 {
    text-align: center;
    margin: 10px auto;
  }
  form {
    .row {
      height: 80px;
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
      .forget {
        display: flex;
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
