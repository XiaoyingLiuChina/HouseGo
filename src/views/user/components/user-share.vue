<template>
  <div class="user-discuss">
    <div class="card">
      <div class="card-header"><h3>我的分享记录</h3></div>
      <div class="card-body">
        <div class="app-share row" v-if="list.length > 0" :key="list">
          <div class="card" v-for="(item, index) in list" :key="index">
            <div class="card-header">
              <div>
                <div v-if="item.student">
                  <img :src="item.student.image" />
                  <span>
                    {{ item.student.name }}<small style="margin-left: 10px">{{ item.share.issuerid }}</small>
                  </span>
                </div>
                <div v-if="item.teacher">
                  <img :src="item.teacher.image" />
                  <span>
                    {{ item.teacher.name }}<small style="margin-left: 10px">{{ item.share.issuerid }}</small>
                  </span>
                </div>
              </div>
              <small class="text-muted">{{ item.laboratory.name }}</small>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.share.title }}</h5>
              <p class="card-text mycontent" v-html="item.share.content.replace(/#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>

              <div class="card-last-row mb-3">
                <ul class="talk-images">
                  <li v-for="img in item.image" :key="img">
                    <img :src="img" alt="xx" class="img-thumbnail" />
                  </li>
                </ul>
              </div>
              <div class="publish-nice text-muted">
                <small>发布时间：{{ item.share.time }}</small>
                <i class="bi bi-trash" @click="deleteMyShare(item.share.id)"></i>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>暂无分享,快去发布一条分享吧</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getShareList, deleteShare } from '@/api/share'
export default {
  name: 'UserShare',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getShareList()
      this.list = data
      this.list.reverse()
    },
    async deleteMyShare(id) {
      this.$confirm('确认删除该条分享？', '提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await deleteShare(id)
          if (data === true) {
            this.getList()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }
        })
        .catch(function (err) {
          console.log(err)
          // 捕获异常
        })
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
}
</style>
