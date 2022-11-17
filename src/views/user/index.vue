<template>
  <div class="user-page">
    <AppTopnav />
    <AppHeader />
    <!-- <div class="info-header">
      <span id="welcome">
        欢迎
        <img :src="user.avatar" alt="..." />
        小傻逼宋洋
        <span v-if="user.type === 'teacher'" style="font-size: 12px">老师</span>
        <span v-else style="font-size: 12px">同学</span>
      </span>
      <a href="#" @click="logout">退出登录</a>
    </div> -->
    <div class="container">
      <UserLeftnav :user="user" />
      <div class="main"><RouterView></RouterView></div>
    </div>
    <AppFooter />
  </div>
</template>
<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import UserLeftnav from './components/user-leftnav.vue'
import { getTeacher, getStudent } from '@/api/user'
export default {
  name: 'UserPage',
  components: { AppHeader, AppFooter, UserLeftnav, AppTopnav },

  data() {
    return {
      user: this.$store.state.user.profile
    }
  },
  mounted() {
    this.getUser()
  },

  methods: {
    async getUser() {
      if (this.user.type === '0') {
        const data = await getTeacher(this.user.id)
        console.log(data)
      } else {
        const data = await getStudent(this.user.id)
        this.$store.commit('user/setUser', data)
      }
    },
    logout() {
      this.$store.commit('user/setUser', {})
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 999;
}
.user-page {
  .info-header {
    margin: 0 auto;
    a {
      margin-left: 50px;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .container {
    min-height: 470px;
    display: flex;

    .main {
      flex: 1;
      margin-left: 10px;
    }
  }
}
</style>
