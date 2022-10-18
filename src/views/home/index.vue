<template>
  <div class="app-home-page">
    <HomeBanner />
    <HomeHot />
  </div>
</template>

<script>
import HomeBanner from './components/home-banner.vue'
import HomeHot from './components/home-hot.vue'
export default {
  name: 'app-home-page',
  components: { HomeBanner, HomeHot }
}
</script>

<style scoped lang="less"></style>
