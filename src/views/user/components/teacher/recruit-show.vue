<template>
  <div class="recruit-show">
    {{ oneRecruit }}
    <button>查看当前招新信息的申请的学生</button>
    <div class="close"><button type="button" class="btn-close" aria-label="Close" @click="closeEvent"></button></div>
  </div>
</template>
<script>
export default {
  name: 'RecruitShow',
  props: {
    oneRecruit: {
      type: Object
    }
  },
  emits: ['updateDialog'],
  methods: {
    closeEvent() {
      this.$emit('updateDialog')
    }
  }
}
</script>
<style lang="less" scoped>
.recruit-show {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: pink;
  width: 400px;
  height: 300px;
  .close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
