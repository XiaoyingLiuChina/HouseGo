<template>
  <div class="app-home-page">
    <HomeBanner />
    <HomeRecruit />
    <HomeLatestShare />
    <HomeHot />
  </div>
</template>

<script>
import HomeBanner from './components/home-banner.vue'
import HomeHot from './components/home-hot.vue'
import HomeLatestShare from './components/home-latest-share.vue'
import HomeRecruit from './components/home-recruit.vue'
export default {
  name: 'app-home-page',
  components: { HomeBanner, HomeHot, HomeLatestShare, HomeRecruit }
}
</script>

<style scoped lang="less"></style>
