<template>
  <div class="share-modules">
    <h5>来看看加入实验室同学的心得分享，更有利于帮助你了解实验室日常</h5>
    <AppShare :shareList="shareList" />
  </div>
</template>
<script>
export default {
  name: 'ShareModules',
  data() {
    return {
      shareList: [
        {
          id: 1,
          name: '王松',
          title: '实验室的第一天',
          context: '王松老师带飞，快来',
          publishTime: '2020-04-18',
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        },
        {
          id: 2,
          name: '宋洋',
          title: '实验室的第一天',
          context: '谢先博老师带飞，快来',
          publishTime: '2021-04-18',
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        },
        {
          id: 3,
          name: '宋洋',
          title: '实验室的第一天',
          context: '谢先博老师带飞，快来',
          publishTime: '2021-04-18',
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        }
      ]
    }
  },
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
