<template>
  <div class="student-info">
    <div class="card">
      <div class="card-header"><h3>修改密码</h3></div>
      <div class="card-body">
        <div>
          <label for="oldpwd"><h5>旧密码：</h5></label>

          <input type="password" id="oldpwd" name="oldpwd" placeholder="请输入旧密码" class="form-control" />
        </div>
        <div>
          <label for="newpwd"><h5>新密码:</h5></label>
          <input type="password" id="newpwd" name="newpwd" placeholder="请输入新密码" class="form-control" />
        </div>
        <div>
          <label for="new2pwd"><h5>确认密码:</h5></label>
          <input type="password" id="new2pwd" name="new2pwd" placeholder="再次输入新密码" class="form-control" />
        </div>
        <button class="btn btn-primary">确认修改</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StudentInfo'
}
</script>
<style lang="less" scoped>
.student-info {
  margin-top: 20px;
  .card-body {
    & > div {
      display: flex;
      margin-top: 20px;
      & > label {
        width: 80px;
      }
      input {
        display: block;
        padding: 5px 5px;
        width: 250px;
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
    button {
      margin-top: 20px;
    }
  }
}
</style>
