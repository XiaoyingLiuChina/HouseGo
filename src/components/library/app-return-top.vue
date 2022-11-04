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
  top: 450px;
  margin: 0 auto;
  text-align: center;
  i {
    font-size: 80px;
    color: #55b46c;
  }
}
</style>
