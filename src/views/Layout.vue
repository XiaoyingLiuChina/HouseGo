<template>
  <div class="container">
    <AppTopnav />
    <AppHeader />
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
export default {
  name: 'app-layout',
  components: { AppTopnav, AppHeader, AppFooter }
}
</script>

<style scoped lang="less"></style>
