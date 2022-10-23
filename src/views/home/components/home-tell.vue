<template>
  <div class="home-tell">
    <div class="card" v-for="item in 10" :key="item">
      <h5 class="card-header"><img src="@/assets/images/ma.png" />宋洋小傻逼</h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
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
  name: 'HomeTell'
}
</script>
<style lang="less" scoped>
.home-tell {
  .card {
    margin-bottom: 15px;
    .card-header {
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
          width: 200px;
          height: 200px;
          margin-right: 15px;
          border: 1px solid red;
        }
      }
    }
  }
}
</style>
