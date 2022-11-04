<template>
  <div class="app-return-top" @click="returnTop"><i class="bi bi-arrow-up-circle"></i></div>
</template>
<script>
export default {
  name: 'AppReturnTop',
  methods: {
    returnTop() {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
<style lang="less" scoped>
.app-return-top {
  position: sticky;
  top: 400px;
  i {
    font-size: 80px;
  }
}
</style>
