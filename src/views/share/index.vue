<template>
  <div class="share-modules">
    <h5>来看看加入实验室同学的心得分享，更有利于帮助你了解实验室日常</h5>
    <AppShare />
  </div>
</template>
<script>
export default {
  name: 'ShareModules',
  mounted() {
    document.documentElement.scrollTop = 0
  }
}
</script>
<style lang="less" scoped>
.share-modules {
  background-color: @appColor;
  h5 {
    padding: 10px 15px;
  }
}
</style>
