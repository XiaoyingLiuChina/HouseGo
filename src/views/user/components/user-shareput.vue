<template>
  <div class="user-share-form">
    <div class="card">
      <div class="card-header"><h3>发布分享</h3></div>
      <div class="card-body">
        <div class="input-group mb-3">
          <span class="input-group-text">题目</span>
          <input type="text" class="form-control" placeholder="缺个题目加上它" v-model="shareItem.title" />
        </div>
        <div class="textarea-emo mb-3">
          <div class="input-group">
            <span class="input-group-text">内容</span>
            <textarea class="form-control content-area" aria-label="With textarea" placeholder="写下你想分享的内容吧" v-model="shareItem.content"></textarea>
          </div>
          <span><i class="bi bi-emoji-smile btn btn-outline-secondary" @click="emotionDialog = !emotionDialog"></i></span>
          <div style="width: 300px" class="emotion-dialog" v-if="emotionDialog">
            <emotion @emotion="handleEmotion" :height="200"></emotion>
          </div>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">预览</span>
          <p class="form-control preview-content" v-html="shareItem.content.replace(/#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>
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
import Emotion from './Emotion'
export default {
  name: 'UserShareform',
  components: { UserShareImg, Emotion },
  data() {
    return {
      shareItem: {
        title: '',
        content: '',
        imglist: []
      },
      emotionDialog: false
    }
  },
  computed: {},
  methods: {
    getShareImages(imgs) {
      this.shareItem.imglist = imgs
    },
    putShare() {
      console.log(this.shareItem)
      // 可以发布到后端了
    },
    handleEmotion(emo) {
      this.shareItem.content += emo
    },
    // 将匹配结果替换表情图片
    emotion(res) {
      console.log(res)
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
.user-share-form {
  margin-top: 10px;

  .content-area {
    height: 200px;
  }
  .preview-content {
    white-space: pre-wrap; /* css3.0 */
    white-space: -moz-pre-wrap; /* Firefox */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  .input-group {
    width: 60%;
  }
  .textarea-emo {
    display: flex;
    height: 200px;
    > span {
      margin-left: 5px;
      i {
        border: none;
        border-radius: 50%;
        font-size: 24px;
        text-align: center;
      }
    }
    .emotion-dialog {
      width: 250px;
      margin-left: 5px;
      border: 1px solid #d9d9d9;
      border-radius: 5px;
    }
  }
}
input {
  display: block;
  padding: 0.375rem 0.75rem;
  width: 180px;
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
.emoji-mart[data-v-7bc71df8] {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 420px;
  color: #ffffff !important;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: #fff;
}
</style>
