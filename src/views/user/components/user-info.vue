<template>
  <div class="user-info">
    <div class="card text-center">
      <div class="card-header"><h3>个人基本信息</h3></div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">学号：5120193378</li>
          <li class="list-group-item">姓名：宋洋</li>
          <li class="list-group-item">性别：男</li>
          <li class="list-group-item">学院：计算机科学与技术学院</li>
          <li class="list-group-item">专业：软件工程</li>
          <li class="list-group-item">班级：软件1905</li>
          <li class="list-group-item">
            手机号码：<input type="text" name="phone" id="phone" class="form-control" />
            <button class="btn btn-primary">修改手机</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo'
}
</script>
<style lang="less" scoped>
.user-info {
  margin-top: 20px;
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
}
</style>
