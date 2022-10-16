<template>
  <div class="app-home-page">
    <div class="container">
      <HomeBanner />
      <HomeHot />
    </div>
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
