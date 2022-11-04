<template>
  <!-- 筛选区 -->
  <div class="sub-filter container">
    <div class="item" v-for="item in choicelist" :key="item.id">
      <div class="head">{{ item.name }}</div>
      <div class="body">
        <!-- <a href="javascript:;">全部</a> -->
        <a href="javascript:;" v-for="(s, index) in item.value" :key="index">{{ s }}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SubFilter',
  setup() {},
  data() {
    return {
      choicelist: [
        { id: '1', name: '年级', value: ['大一', '大二', '大三', '研一'] },
        { id: '2', name: '实验室关键词', value: ['可视化', '数据库', '测试', 'Android'] },
        { id: '3', name: '实验室规模', value: ['10-20', '30-40', '40+'] }
      ]
    }
  }
}
</script>
<style scoped lang="less">
// 筛选区
.sub-filter {
  background: @appColor;
  padding: 15px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 100px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @hoverColor;
        }
      }
    }
  }
}
</style>
