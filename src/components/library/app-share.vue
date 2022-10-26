<template>
  <div class="app-share">
    <div class="card" v-for="item in shareList" :key="item.id">
      <div class="card-header">
        <div>
          <img src="@/assets/images/ma.png" />
          <span> {{ item.name }} </span>
        </div>
        <small class="text-muted">移动实验室</small>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.context }}</p>
        <p class="card-text">
          <small class="text-muted">{{ item.publishTime }}</small>
        </p>

        <ul class="talk-images">
          <li v-for="img in item.images" :key="img">
            <img :src="img" alt="xx" />
          </li>
        </ul>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppShare',
  props: {
    shareList: {
      type: Array,
      default: () => [
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
        }
      ]
    }
  }
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
