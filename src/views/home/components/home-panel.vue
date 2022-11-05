<template>
  <div class="home-panel">
    <div class="head">
      <h3>
        {{ title }}<small>{{ subTitle }}</small>
      </h3>
      <slot name="right" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'HomePanel',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.home-panel {
  background-color: @appColor;
  padding: 15px 15px;
  border-radius: 10px;
  .head {
    padding: 30px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>
