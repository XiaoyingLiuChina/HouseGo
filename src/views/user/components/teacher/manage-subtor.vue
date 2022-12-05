<template>
  <div class="manage-subtor">
    <div class="card">
      <div class="card-header">
        <h3>人员管理</h3>
      </div>
      <div class="card-body">
        <table class="table table-hover table-bordered text-nowrap" :key="list">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">学生学号</th>
              <th scope="col">班级</th>
              <th scope="col">学生姓名</th>
              <th scope="col">学生头像</th>
              <th scope="col">联系方式</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody v-if="list">
            <tr v-for="(item, index) in list" :key="index">
              <th scope="row">{{ index }}</th>
              <td>{{ item.id }}</td>
              <td>{{ item.clas }}</td>
              <td>{{ item.name }}</td>
              <td><img :src="item.image" alt="学生照片" /></td>
              <td>{{ item.telephone }}</td>
              <td>
                <button class="btn btn-danger" @click="deleteStudent(item.id)">删除</button>
                <button class="btn btn-primary" @click="getStudentMes(item)">查看</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <el-dialog v-model="dialogTableVisible" title="学生详情信息">
      <div class="info">
        <div class="mes">
          <p>学号：{{ lookMes.student.id }}</p>
          <p>姓名：{{ lookMes.student.name }}</p>
          <p>班级：{{ lookMes.student.clas }}</p>
          <p>联系方式：{{ lookMes.student.telephone }}</p>
          <p>获奖情况：{{ lookMes.resume.reward }}</p>
          <p>自我评价：{{ lookMes.resume.introduce }}</p>
        </div>
        <img :src="lookMes.student.image" alt="学生照片" />
      </div>
      已发布分享条数：{{ lookMes.sharelist.length }}(条)
      <div class="card" v-if="lookMes.sharelist.length > 0" style="margin-top: 15px">
        <div class="card-header">最新一条分享</div>
        <div class="card-body">
          <h5 class="card-title">{{ lookMes.sharelist[0].share.title }}</h5>
          <p class="card-text mycontent" v-html="lookMes.sharelist[0].share.content.replace(/#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)"></p>
          <div class="card-last-row mb-3">
            <ul class="talk-images">
              <li v-for="img in lookMes.sharelist[0].image" :key="img">
                <img :src="img" alt="分享图片" class="img-thumbnail" />
              </li>
            </ul>
          </div>
          <div class="publish-nice text-muted">
            <small>发布时间：{{ lookMes.sharelist[0].share.time }}</small>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getLabStudentList } from '@/api/user'
import { exitLabStudent } from '@/api/labs'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getResume } from '@/api/resume'
import { getStudentShareList } from '@/api/share'
export default {
  name: 'ManageSubtor',
  data() {
    return {
      list: [],
      dialogTableVisible: false,
      lookMes: null
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList() {
      const data = await getLabStudentList()
      this.list = data
    },
    deleteStudent(studentid) {
      ElMessageBox.confirm('确认将该学生从实验室删除？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await exitLabStudent(studentid)
          if (data === true) {
            ElMessage({ type: 'success', message: '操作成功' })
            this.getList()
          }
        })
        .catch(function (err) {
          console.log(err)
          // 捕获异常
        })
    },
    async getStudentMes(student) {
      const resume = await getResume(student.id)
      const sharelist = await getStudentShareList(student.id)
      const data = {
        sharelist
      }
      Object.assign(data, { student }, { resume })
      this.lookMes = data
      this.dialogTableVisible = true
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
img {
  width: 60px;
  height: 60px;
}
tbody {
  th,
  td {
    vertical-align: middle;
  }
  button {
    margin-right: 5px;
  }
}
.info {
  display: flex;
  justify-content: space-between;
  img {
    min-width: 100px;
    min-height: 100px;
  }
}
</style>
