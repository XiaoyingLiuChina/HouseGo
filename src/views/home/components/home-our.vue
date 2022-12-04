<template>
  <div class="home-our">
    <LoginHeader>关于我们</LoginHeader>
    <section class="login-section">
      <div class="wrapper">
        <p>该系统由西南科技大学软件1902班:</p>
        <div class="person">
          <div>
            <p>刘晓英</p>
            <img src="@/assets/images/lxy.jpg" alt="" class="img-thumbnail" />
          </div>
          <div>
            <p>安菊</p>
            <img src="@/assets/images/aj.jpg" alt="" class="img-thumbnail" />
          </div>
          <div>
            <p>黄禹倩</p>
            <img src="@/assets/images/hyq.jpg" alt="" class="img-thumbnail" />
          </div>
          <div>
            <p>雷欢琪</p>
            <img src="@/assets/images/lhq.jpg" alt="" class="img-thumbnail" />
          </div>
        </div>
        <p>四位同学合作完成</p>
      </div>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppFooter from '@/components/app-footer.vue'
import LoginHeader from '@/views/login/components/login-header.vue'

export default {
  name: 'HomeOur',
  components: { LoginHeader, AppFooter }
}
</script>
<style lang="less" scoped>
.login-section {
  height: 488px;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  .wrapper {
    width: 600px;
    font-size: 24px;
    color: #5579b4;
    .person {
      display: flex;
      justify-content: space-between;
      img {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>
