<template>
  <div class="recruit-show">
    <h4 style="margin-top: 15px; margin-left: 15px; font-weight: bold">招新详细信息</h4>
    <table class="table table-light table-striped" style="margin-top: 12px; margin-left: 15px; margin-right: 15px">
      <tbody>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">招新方向</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.direction }}</td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">招新对象</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.people }}</td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">招新描述</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.introduce }}</td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">招新人数</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.recruitenumber }}</td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">已申请人数</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.applypeople }}</td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">已通过人数</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.passpeople }}</td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">发布时间</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.starttime }}</td>
        </tr>
        <tr>
          <td style="border-right: 1px solid #c0c0c0">截止时间</td>
          <td v-if="recruitinfo.recruit">{{ recruitinfo.recruit.endtime }}</td>
        </tr>
      </tbody>
    </table>
    <div style="text-align: center; margin-top: 10px">
      <button type="button" class="btn btn-primary">查看当前招新信息的申请的学生</button>
    </div>
    <div class="close"><button type="button" class="btn-close" aria-label="Close" @click="closeEvent"></button></div>
  </div>
</template>
<script>
export default {
  name: 'RecruitShow',
  data() {
    return {
      recruitinfo: {}
    }
  },
  props: {
    oneRecruit: {
      type: Object
    }
  },
  mounted() {
    this.recruitinfo = this.oneRecruit[0]
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
  background-color: @appColor;
  width: 400px;
  height: 385px;
  .close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
table {
  width: 370px;
}
</style>
