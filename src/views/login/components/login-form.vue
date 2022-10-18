<template>
  <div class="login-form">
    <h3>账号登录</h3>
    <form>
      <div class="row">
        <label for="account" class="col-form-label">学号</label>
        <div class="account">
          <input type="text" class="form-control" id="account" />
        </div>
      </div>
      <div class="row">
        <label for="pw" class="col-form-label">密码</label>
        <div class="pw">
          <input type="password" class="form-control" id="pw" />
        </div>
      </div>
      <div class="row">
        <div class="forget col"><a href="#">忘记密码？</a></div>
        <div class="gree col">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1" />
            <label class="form-check-label" for="gridCheck1"> 是否同意协议? </label>
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'LoginForm'
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
      }
      &:nth-child(3) {
        height: 40px;
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
