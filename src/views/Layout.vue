<template>
  <div class="container">
    <AppTopnav />
    <AppHeader />
    <!-- 吸顶头部 -->
    <AppHeaderSticky />
    <main>
      <RouterView></RouterView>
    </main>
    <AppFooter />
  </div>
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
