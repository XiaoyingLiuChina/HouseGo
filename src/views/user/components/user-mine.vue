<template>
  <div class="user-mine">
    <!-- 用户信息 -->
    <div class="user-meta">
      <div class="avatar">
        <img src="@/assets/images/ma.png" />
      </div>
      <h4>sb宋洋</h4>
    </div>
    <div class="item">
      <RouterLink to="/user">
        <i class="bi bi-person-lines-fill"></i>
        <p>个人信息管理</p>
      </RouterLink>
      <RouterLink to="/user/updatepw">
        <i class="bi bi-shield-lock"></i>
        <p>修改密码</p>
      </RouterLink>
      <RouterLink to="/user/introduce">
        <i class="bi bi-journal"></i>
        <p>修改简介</p>
      </RouterLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserMine'
}
</script>
<style lang="less" scoped>
.user-mine {
  width: 100%;
  height: 132px;
  background-color: pink;
  background: url(../../../assets/images/login-bg.png) no-repeat center / cover;
  display: flex;
  .user-meta {
    flex: 1;
    display: flex;
    align-items: center;
    .avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      overflow: hidden;
      margin-left: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h4 {
      padding-left: 26px;
      font-size: 18px;
      font-weight: normal;
      color: white;
    }
  }
  .item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    &:first-child {
      border-right: 1px solid #f4f4f4;
    }
    a {
      color: white;
      font-size: 16px;
      text-align: center;
      i {
        font-size: 32px;
      }
      p {
        line-height: 32px;
      }
    }
  }
}
</style>
