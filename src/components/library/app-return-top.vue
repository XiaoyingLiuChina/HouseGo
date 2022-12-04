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
  top: 600px;
  margin: 0 auto;
  text-align: center;
  i {
    font-size: 40px;
    color: #5579b4;
  }
}
</style>
