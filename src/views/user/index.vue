<template>
  <div class="user-page">
    <AppTopnav />
    <AppHeader />

    <div class="container">
      <UserLeftnav />
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
import { getTeacher, getStudent, getCollege } from '@/api/user'
import { getLabByTeacher, getLabByStudent } from '@/api/labs'
import { getResume } from '@/api/resume'
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
      let data = null
      let college = ''
      let resume = ''
      if (this.user.type === '0') {
        data = await getTeacher(this.user.id)
        if (data.laboratoryid !== '') {
          const lab = await getLabByTeacher(data.id)
          Object.assign(data, { lab })
        }
      } else {
        data = await getStudent(this.user.id)
        resume = await getResume(this.user.id)
        // 加入了实验室
        if (data.typel === 1) {
          const lab = await getLabByStudent(data.id)
          Object.assign(data, { lab })
        }
      }
      college = await getCollege(data.collegeid)
      college = college[0]
      Object.assign(data, { college, resume })
      // 再次更新
      this.$store.commit('user/setUser', data)
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
      margin-top: 10px;
    }
  }
}
</style>
