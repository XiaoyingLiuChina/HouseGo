<template>
  <div class="app-share">
    <div class="card" v-for="item in 10" :key="item">
      <div class="card-header">
        <div>
          <img src="@/assets/images/ma.png" />
          <span> 宋洋小傻逼 </span>
        </div>
        <small class="text-muted">移动实验室</small>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        <ul class="talk-images">
          <li v-for="s in 3" :key="s"><img src="@/assets/images/logo.png" alt="xx" /></li>
        </ul>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppShare'
}
</script>
<style lang="less" scoped>
.app-share {
  padding: 12px;
  .card {
    margin-bottom: 15px;
    .card-header {
      display: flex;
      //   width: 500px;
      justify-content: space-between;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        border: 1px solid #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
    }
    .card-body {
      .talk-images {
        display: flex;
        li {
          width: 180px;
          height: 180px;
          margin-right: 15px;
          border: 1px solid red;
        }
      }
    }
  }
}
</style>
