<template>
  <!-- 实验室简介组件 -->
  <div class="labs-introduction mb-3">
    <h5 class="mb-3">实验室简介</h5>
    <div class="container">
      <div class="col-4">
        <img src="@/assets/images/ma.png" class="img-thumbnail" alt="..." />
      </div>
      <div class="introduction col-8">
        <div class="info">
          <div class="row mb-2" v-for="(item, index) in introlist" :key="index">
            <div class="col-2">{{ item.name }}</div>
            <div class="col-6" style="font-size: 14px">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LabsItem',
  data() {
    return {
      introlist: [
        { name: '实验室名称', value: '人工智能实验室' },
        { name: '实验室人数', value: '52' },
        { name: '成立时间', value: '2020-12-12' },
        { name: '实验室老师', value: '潘娅' },
        { name: '联系方式', value: '15949575369' },
        { name: '实验室介绍', value: '本实验室方向主要是软件测试,你可以学到的技术有自动化测试' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
img {
  width: 400px;
}
.labs-introduction {
  background-color: @appColor;
  .container {
    display: flex;
    .introduction {
      padding: 10px;
    }
  }
}
</style>
