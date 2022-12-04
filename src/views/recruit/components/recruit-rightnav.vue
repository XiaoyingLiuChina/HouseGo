<template>
  <div class="recruit-rightnav">
    <AppTime />
    <div class="user" v-if="user.id != ''">
      <img :src="user.image" alt="用户头像" class="img-thumbnail" />
      <div class="resume">
        <div v-if="user.resume === '' || user.resume === null" style="margin-top: 8px">
          <p>用户名：{{ user.name }}</p>
          <p>简历还为完善，去<RouterLink to="/user">个人中心</RouterLink>完善</p>
        </div>
        <div v-else style="margin-top: 8px">
          <p>用户名：{{ user.name }}</p>
        </div>
      </div>
    </div>
    <AppReturnTop />
  </div>
</template>
<script>
export default {
  name: 'RecruitRightnav',
  data() {
    return {
      user: this.$store.state.user.profile
    }
  }
}
</script>
<style lang="less" scoped>
.recruit-rightnav {
  margin: 10px auto;
  // background-color: #fff;
  .user {
    margin-top: 10px;
    position: sticky;
    top: 280px;
    img {
      width: 100%;
      max-height: 170px;
    }
    border-radius: 10px;
    background-color: @appColor;
    text-align: center;
    // padding: 10px;
    color: #5579b4;
    padding: 15px;
  }
}
</style>
