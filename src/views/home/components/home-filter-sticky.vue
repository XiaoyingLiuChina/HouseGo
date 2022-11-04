<template>
  <div class="app-header-sticky" :class="{ show: y >= 170 }">
    <div class="container" v-show="y >= 170">
      <HomeFilter />
    </div>
  </div>
</template>

<script>
import { useWindowScroll } from '@vueuse/core'
import HomeFilter from './home-filter.vue'
export default {
  name: 'AppHeaderSticky',
  components: { HomeFilter },
  setup() {
    const { y } = useWindowScroll()
    return { y }
  }
}
</script>
<style scoped lang="less">
.app-header-sticky {
  width: 100%;
  height: 150px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: @appColor;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }
}
</style>
