<template>
  <div class="home-recruit row container">
    <div class="choice"><h4>已选标签：</h4></div>

    <HomeFilter></HomeFilter>
    <div class="col-10 recruid-list">
      <RouterLink v-for="i in 5" class="card mb-2" :key="i" to="/labs/0">
        <div class="card-body">
          <h5 class="card-title">软件测试实验室</h5>
          <p class="card-text mb-2">招新：对软件测试有兴趣</p>
          <div class="card-bottom mb-2 text-muted">
            <div class="tag"><span v-for="item in 5" :key="item">软件测试</span></div>
            <div class="time">2022-12-02</div>
          </div>
        </div>
        <img src="@/assets/images/ma.png" />
      </RouterLink>
    </div>
    <HomeRecruitNav class="col-2"></HomeRecruitNav>
  </div>
</template>
<script>
import HomeRecruitNav from './home-recruit-nav.vue'
import HomeFilter from './home-filter.vue'
export default {
  name: 'HomeRecruit',
  components: { HomeRecruitNav, HomeFilter },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: row;
  align-items: center;

  .hoverShadow ();
  img {
    padding-right: 10px;
    width: 150px;
    height: 100px;
  }
  .card-bottom {
    color: #6c757d;
    font-size: 12px;
    span {
      margin-right: 8px;
      &:hover {
        color: green;
      }
    }
    display: flex;
    justify-content: space-between;
  }
}
.home-recruit {
  width: 100%;
  padding: 0;
  .choice {
    margin: 10px auto;
  }
  .recruid-list {
    margin-top: 10px;
  }
}
</style>
