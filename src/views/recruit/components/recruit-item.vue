<template>
  <div class="recruit-item" style="margin-top: 20px; margin-bottom: 20px" id="box">
    <h4 style="margin-left: 10px; margin-top: 10px">招新详细信息</h4>
    <div class="info">
      <div style="word-wrap: break-word; margin-left: 15px" class="left">
        <h5>招新描述：</h5>
        <h5 style="text-indent: 2em">{{ describe }}</h5>
        <table class="table table-secondary table-striped" style="margin-top: 15px">
          <tbody>
            <tr v-for="(item, index) in infolist" :key="index">
              <td style="border-right: 1px solid #c0c0c0">{{ item.name }}</td>
              <td>{{ item.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right">
        <img src="@/assets/images/ma.png" alt="实验室图片" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecruitItem',
  data() {
    return {
      describe: '12311111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111113',
      infolist: [
        { name: '发布老师', value: '潘娅' },
        { name: '招新对象', value: '大二、大三学生' },
        { name: '招新方向', value: '软件测试' },
        { name: '招新人数', value: '5' },
        { name: '已申请人数', value: '8' },
        { name: '已通过人数', value: '2' }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.info {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}
.left {
  /* background: blue; */
  width: 750px;
}
.right {
  width: 400px;
  margin-left: 30px;
}
td {
  text-align: center;
  line-height: 30px;
}
#box {
  background-color: @appColor;
}
</style>
