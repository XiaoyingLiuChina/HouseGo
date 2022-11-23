<template>
  <!-- 实验室简介组件 -->
  <div class="labs-introduction mb-3">
    <h5 class="mb-3">实验室简介</h5>
    <div class="container">
      <div class="col-4">
        <img :src="lab.image" class="img-thumbnail" alt="实验室图片" />
      </div>
      <div class="introduction col-8">
        <div class="info">
          <div class="row mb-2">
            <div class="col-2">实验室名称</div>
            <div class="col-6" style="font-size: 14px">{{ lab.name }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-2">实验室规模</div>
            <div class="col-6" style="font-size: 14px">{{ lab.scale }}(人)</div>
          </div>
          <div class="row mb-2">
            <div class="col-2">实验室地址</div>
            <div class="col-6" style="font-size: 14px">{{ lab.site }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-2">实验室介绍</div>
            <div class="col-6" style="font-size: 14px">{{ lab.introduce }}</div>
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
    return {}
  },
  props: {
    lab: {
      type: Object
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
