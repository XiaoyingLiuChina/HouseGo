<template>
  <div class="user-discuss">
    <div class="card">
      <div class="card-header"><h3>我的分享记录</h3></div>
      <div class="card-body">
        <AppShare :shareList="shareList" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserDiscuss',
  data() {
    return {
      shareList: [
        {
          id: 1,
          name: '王松',
          title: '实验室的第er天',
          context: '王松老师带飞，快来',
          publishTime: '2020-04-18',
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        },
        {
          id: 2,
          name: '王松',
          title: '实验室的第san天',
          context: '谢先博老师的实验室也不错，冲啊，软件测试千万不要去',
          publishTime: '2022-04-18',
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped></style>
