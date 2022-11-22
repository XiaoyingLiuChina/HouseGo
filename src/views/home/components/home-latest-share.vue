<template>
  <div class="latest-share">
    <HomePanel title="最热分享" subTitle="相互学习 天天进步一点点">
      <template #right><AppMore path="/share" /></template>
      <ul v-if="list.length >= 4" class="labs-list row row-cols-1 row-cols-md-3 row-cols-xl-4">
        <li v-for="item in list" :key="item.share.id" class="col">
          <div class="card" style="width: 100%">
            <img :src="item.image[0]" class="card-img-top" alt="分享图片" />
            <div class="card-body">
              <h5 class="card-title">{{ item.share.title }}</h5>
              <p class="card-text" v-html="item.share.content.replace(/#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>
              <!-- // 进入实验室的第一天，潘娅老师带着我们了解软件测试，给我们叙述了软件测试的发展前景，每个人都很有冲劲儿，希望老师不是给我们画大饼 -->
              <div class="btn-nice">
                <RouterLink :to="`/share/${item}`" class="btn btn-primary">查看详情</RouterLink>
                <span>赞数：{{ item.share.like }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </HomePanel>
  </div>
</template>
<script>
import HomePanel from './home-panel.vue'
import AppMore from '@/components/library/app-more.vue'
import { getShare } from '@/api/share'
export default {
  name: 'HomeLatestShare',
  components: { HomePanel, AppMore },
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getShareList()
  },
  methods: {
    async getShareList() {
      const data = await getShare(-1)
      const newdata = data.sort(function (x, y) {
        return x.share.like - y.share.like
      })
      this.list = newdata.slice(-4).reverse()
      console.log(this.list)
    },
    // 将匹配结果替换表情图片
    emotion(res) {
      const word = res.replace(/#|;/gi, '')
      const list = [
        '微笑',
        '撇嘴',
        '色',
        '发呆',
        '得意',
        '流泪',
        '害羞',
        '闭嘴',
        '睡',
        '大哭',
        '尴尬',
        '发怒',
        '调皮',
        '呲牙',
        '惊讶',
        '难过',
        '酷',
        '冷汗',
        '抓狂',
        '吐',
        '偷笑',
        '可爱',
        '白眼',
        '傲慢',
        '饥饿',
        '困',
        '惊恐',
        '流汗',
        '憨笑',
        '大兵',
        '奋斗',
        '咒骂',
        '疑问',
        '嘘',
        '晕',
        '折磨',
        '衰',
        '骷髅',
        '敲打',
        '再见',
        '擦汗',
        '抠鼻',
        '鼓掌',
        '糗大了',
        '坏笑',
        '左哼哼',
        '右哼哼',
        '哈欠',
        '鄙视',
        '委屈',
        '快哭了',
        '阴险',
        '亲亲',
        '吓',
        '可怜',
        '菜刀',
        '西瓜',
        '啤酒',
        '篮球',
        '乒乓',
        '咖啡',
        '饭',
        '猪头',
        '玫瑰',
        '凋谢',
        '示爱',
        '爱心',
        '心碎',
        '蛋糕',
        '闪电',
        '炸弹',
        '刀',
        '足球',
        '瓢虫',
        '便便',
        '月亮',
        '太阳',
        '礼物',
        '拥抱',
        '强',
        '弱',
        '握手',
        '胜利',
        '抱拳',
        '勾引',
        '拳头',
        '差劲',
        '爱你',
        'NO',
        'OK',
        '爱情',
        '飞吻',
        '跳跳',
        '发抖',
        '怄火',
        '转圈',
        '磕头',
        '回头',
        '跳绳',
        '挥手',
        '激动',
        '街舞',
        '献吻',
        '左太极',
        '右太极'
      ]
      const index = list.indexOf(word)
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
    }
  }
}
</script>
<style lang="less" scoped>
.latest-share {
  margin: 10px auto;
  .labs-list {
    display: flex;
    justify-content: space-between;
    li {
      .card {
        .hoverShadow ();
        img {
          height: 180px;
        }
        .card-body {
          width: 100%;
          height: 170px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          p {
            width: 100%;
            line-height: 24px;
            text-indent: 28px; //控制缩进
            // white-space: nowrap; // 强制限制在一行
            display: -webkit-box; /*必须结合的属性,将对象作为弹性伸缩盒子模型显示*/
            -webkit-line-clamp: 3; /*设置多少行*/
            -webkit-box-orient: vertical; /*必须结合的属性,设置或检索伸缩盒对象的子元素的排列方式*/
            overflow: hidden; /*文本会被修剪，并且剩余的部分不可见*/
            text-overflow: ellipsis; /*显示省略号来代表被修剪的文本*/
          }
          .btn-nice {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .btn {
              max-width: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
