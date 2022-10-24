<template>
  <div class="user-share-form">
    <div class="card">
      <div class="card-header"><h3>发布分享</h3></div>
      <div class="card-body">
        <div class="input-group mb-3">
          <span class="input-group-text">题目</span>
          <input type="text" class="form-control" placeholder="缺个题目加上它" v-model="shareItem.title" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">分享文字内容</span>
          <textarea class="form-control" aria-label="With textarea" placeholder="写下你想分享的内容吧" v-model="shareItem.content"></textarea>
        </div>
        <div class="input-group mb-3">
          <UserShareImg @update-imgs="getShareImages" />
        </div>
        <button class="btn btn-primary" @click="putShare">发表分享</button>
      </div>
    </div>
  </div>
</template>
<script>
import UserShareImg from './user-shareimg.vue'
export default {
  name: 'UserShareform',
  components: { UserShareImg },
  data() {
    return {
      shareItem: {
        title: '',
        content: '',
        imglist: []
      }
    }
  },
  methods: {
    getShareImages(imgs) {
      this.shareItem.imglist = imgs
    },
    putShare() {
      console.log(this.shareItem)
      // 可以发布到后端了
    }
  }
}
</script>
<style lang="less" scoped>
input {
  display: block;
  padding: 0.375rem 0.75rem;
  width: 80px;
  height: 33px;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
}
</style>
