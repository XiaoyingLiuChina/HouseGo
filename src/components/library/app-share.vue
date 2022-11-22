<template>
  <div class="app-share row" v-if="shareList.share">
    <div class="card" v-for="(item, index) in shareList" :key="index" :style="`width:${cardwidth}`">
      <div class="card-header">
        <div>
          <img src="@/assets/images/ma.png" />
          <span>
            黄禹倩<small style="margin-left: 10px">{{ item.share.issuerid }}</small>
          </span>
        </div>
        <small class="text-muted">大数据实验室</small>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ item.share.title }}</h5>
        <p class="card-text">{{ item.share.content }}</p>

        <div class="card-last-row mb-3">
          <ul class="talk-images">
            <li v-for="img in item.image" :key="img">
              <img :src="img" alt="xx" />
            </li>
          </ul>
        </div>
        <div class="publish-nice text-muted">
          <small>发布时间：{{ item.share.time }}</small>
          <span @click="hitLike(item.id)"><i class="bi bi-hand-thumbs-up"></i> {{ item.share.like }}</span>
          <!-- <RouterLink :to="`/share/${item.id}`"><i class="bi bi-three-dots"></i></RouterLink> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppShare',
  data() {
    return {}
  },
  props: {
    shareList: {
      type: Array,
      default: () => [
        {
          id: 1,
          user: {
            name: '宋洋',
            account: '5120193474',
            avatar: '@/assets/images/ma.png',
            lab: '移动实验室'
          },
          title: '实验室的第一天',
          context: '王松老师带飞，快来',
          publishTime: '2020-04-18',
          like: 13,
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        },
        {
          id: 2,
          user: {
            name: '李白',
            account: '5120193474',
            avatar: '@/assets/images/ma.png',
            lab: '移动实验室'
          },
          title: '实验室的第一天',
          context: '谢先博老师带飞，快来',
          publishTime: '2021-04-18',
          like: '14',
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        },
        {
          id: 3,
          user: {
            name: '刷个',
            account: '5120193474',
            avatar: '@/assets/images/logo.png',
            lab: '软件测试实验室'
          },
          title: '实验室的第一天',
          context: '谢先博老师带飞，快来',
          publishTime: '2021-04-18',
          like: 520,
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        },
        {
          id: 4,
          user: {
            name: '冯邵峰',
            account: '5120193474',
            avatar: '@/assets/images/ma.png',
            lab: '可视化实验室'
          },
          title: '实验室的第一天',
          context: '王松老师带飞，快来',
          publishTime: '2020-04-18',
          like: 58,
          images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
        }
      ]
    },
    cardwidth: {
      type: String,
      default: '49%'
    }
  },
  mounted() {},
  methods: {
    hitLike(id) {
      console.log(id)
      // // const index = this.shareList.filter((item) => {
      // //   item.id === id
      // // })
      // // console.log(index)
      // // index[0].like += 1
      // // 根据id 修改点赞数（后端）
      // // 重新请求新的？
      // this.prop.shareList = [
      //   {
      //     id: 1,
      //     user: {
      //       name: '宋洋',
      //       account: '5120193474',
      //       avatar: '@/assets/images/ma.png',
      //       lab: '移动实验室'
      //     },
      //     title: '实验室的第一天',
      //     context: '王松老师带飞，快来',
      //     publishTime: '2020-04-18',
      //     like: 15,
      //     images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
      //   },
      //   {
      //     id: 2,
      //     user: {
      //       name: '李白',
      //       account: '5120193474',
      //       avatar: '@/assets/images/ma.png',
      //       lab: '移动实验室'
      //     },
      //     title: '实验室的第一天',
      //     context: '谢先博老师带飞，快来',
      //     publishTime: '2021-04-18',
      //     like: 45,
      //     images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
      //   },
      //   {
      //     id: 3,
      //     user: {
      //       name: '刷个',
      //       account: '5120193474',
      //       avatar: '@/assets/images/logo.png',
      //       lab: '软件测试实验室'
      //     },
      //     title: '实验室的第一天',
      //     context: '谢先博老师带飞，快来',
      //     publishTime: '2021-04-18',
      //     like: 520,
      //     images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
      //   },
      //   {
      //     id: 4,
      //     user: {
      //       name: '冯邵峰',
      //       account: '5120193474',
      //       avatar: '@/assets/images/ma.png',
      //       lab: '可视化实验室'
      //     },
      //     title: '实验室的第一天',
      //     context: '王松老师带飞，快来',
      //     publishTime: '2020-04-18',
      //     like: 58,
      //     images: ['@/assets/images/ma.png', '@/assets/images/logo.png']
      //   }
      // ]
    }
  },

  watch: {
    shareList: {
      handler(newVal, oldVal) {
        console.log('监听到了')
        console.log(this.shareList)
      },
      deep: true
    }
  }
}
</script>
<style lang="less" scoped>
.app-share {
  padding: 12px;
  .card {
    margin: 5px;
    .hoverShadow();
    .card-header {
      display: flex;
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
          width: 150px;
          height: 150px;
          margin-right: 15px;
          border: 1px solid rgb(123, 120, 120);
        }
      }
    }
  }
  .card-last-row {
    display: flex;
    justify-content: space-between;
  }
  .publish-nice {
    display: flex;
    // flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    span {
      font-size: 12px;
      i {
        padding: 5px;
        font-size: 18px;
        margin-right: 3px;
      }
      &:hover {
        color: @hoverColor;
        i {
          background-color: @appColor;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
