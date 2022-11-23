<template>
  <div class="share-item">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/share">分享区</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">分享详情信息</li>
      </ol>
    </nav>
    <div class="card" v-if="shareMes" :key="shareMes">
      <div class="card-header">
        <div v-if="shareMes">
          <div v-if="shareMes.student">
            <img :src="shareMes.student.image" />
            <span>
              {{ shareMes.student.name }}<small style="margin-left: 10px">{{ shareMes.share.issuerid }}</small>
            </span>
          </div>
          <div v-if="shareMes.teacher">
            <img :src="shareMes.teacher.image" />
            <span>
              {{ shareMes.teacher.name }}<small style="margin-left: 10px">{{ shareMes.share.issuerid }}</small>
            </span>
          </div>
        </div>
        <RouterLink :to="`/labs/${shareMes.laboratory.id}`">
          <small class="text-muted lab">{{ shareMes.laboratory.name }}</small>
        </RouterLink>
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ shareMes.share.title }}</h5>
        <p class="card-text mycontent" v-html="shareMes.share.content.replace(/#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>

        <div class="card-last-row mb-3">
          <ul class="talk-images">
            <li v-for="img in shareMes.image" :key="img">
              <img :src="img" alt="xx" class="img-thumbnail" />
            </li>
          </ul>
        </div>
        <div class="publish-nice text-muted">
          <small>发布时间：{{ shareMes.share.time }}</small>
          <span @click="hitLike(shareMes.share.id)"><i class="bi bi-hand-thumbs-up"></i> {{ shareMes.share.like }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getShare } from '@/api/share'
export default {
  name: 'ShareItem',
  data() {
    return {
      shareMes: null
    }
  },
  mounted() {
    this.getMes()
  },
  methods: {
    async getMes() {
      const data = await getShare(this.$route.params.id)
      this.shareMes = data[0]
      console.log(this.shareMes)
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
      // https://face.t.sinajs.cn/t4/appstyle/expression/ext/normal/28/2018new_han_org
      // https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif
      return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`
    }
  }
}
</script>
<style lang="less" scoped>
nav {
  margin: 10px 0;
  font-size: 18px;
}
.card {
  margin: 5px;
  .lab {
    transition: all 0.5s;
    &:hover {
      color: @hoverColor;
      font-size: 20px;
    }
  }
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
        height: 150px;
        margin-right: 15px;
        img {
          width: 100%;
          height: 150px;
        }
      }
    }
    .mycontent {
      white-space: pre-wrap; /* css3.0 */
      white-space: -moz-pre-wrap; /* Firefox */
      white-space: -pre-wrap; /* Opera 4-6 */
      white-space: -o-pre-wrap; /* Opera 7 */
      word-wrap: break-word; /* Internet Explorer 5.5+ */
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
  i {
    padding: 5px;
    font-size: 20px;
    margin-right: 3px;
    &:hover {
      color: @hoverColor;
    }
  }
}
</style>
