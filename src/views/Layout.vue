<template>
  <AppTopnav />
  <AppHeader />
  <!-- 吸顶头部 -->
  <AppHeaderSticky />
  <div class="container">
    <main>
      <!-- 二级路由 -->
      <RouterView></RouterView>
    </main>
  </div>
  <AppFooter />
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '../components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
export default {
  name: 'app-layout',
  components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky }
}
</script>

<style scoped lang="less"></style>
