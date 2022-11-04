<template>
  <div class="app-home-page">
    <HomeBanner />
    <HomeHot />
    <HomeLatestShare />
  </div>
</template>

<script>
import HomeBanner from './components/home-banner.vue'
import HomeHot from './components/home-hot.vue'
import HomeLatestShare from './components/home-latest-share.vue'
export default {
  name: 'app-home-page',
  components: { HomeBanner, HomeHot, HomeLatestShare }
}
</script>

<style scoped lang="less"></style>
