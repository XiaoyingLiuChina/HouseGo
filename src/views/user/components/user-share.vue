<template>
  <div class="user-discuss">
    <div class="card">
      <div class="card-header"><h3>我的分享记录</h3></div>
      <div class="card-body">
        <AppShare :shareList="shareList" cardwidth="100%" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserShare',
  data() {
    return {
      shareList: [
        {
          id: 1,
          name: '王松',
          title: '实验室的第一天',
          context: '王松老师带飞，快来',
          publishTime: '2020-04-18',
          like: 13,
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        },
        {
          id: 2,
          name: '宋洋',
          title: '实验室的第一天',
          context: '谢先博老师带飞，快来',
          publishTime: '2021-04-18',
          like: '14',
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped></style>
