<template>
  <div class="recruit-item" v-if="flag">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">首页</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/recruit">招新信息</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ recruitMes.laboratory.name }}</li>
      </ol>
    </nav>
    <div class="mainbox">
      <div class="box">
        <h5>招新描述：</h5>
        <h5 style="text-indent: 2em" class="introduce">
          {{ recruitMes.recruit.introduce }}
        </h5>
        <table class="table table-secondary table-striped" style="margin-top: 15px">
          <tbody>
            <tr>
              <td style="border-right: 1px solid #c0c0c0">招新对象</td>
              <td>{{ recruitMes.recruit.people }}</td>
            </tr>
            <tr>
              <td style="border-right: 1px solid #c0c0c0">招新方向</td>
              <td>{{ recruitMes.recruit.direction }}</td>
            </tr>
            <tr>
              <td style="border-right: 1px solid #c0c0c0">截止时间</td>
              <td>{{ recruitMes.recruit.endtime }}</td>
            </tr>
            <tr>
              <td style="border-right: 1px solid #c0c0c0">预计招新人数</td>
              <td>{{ recruitMes.recruit.recruitenumber }}</td>
            </tr>
            <tr>
              <td style="border-right: 1px solid #c0c0c0">已申请人数</td>
              <td>{{ recruitMes.recruit.applypeople }}</td>
            </tr>
            <tr>
              <td style="border-right: 1px solid #c0c0c0">已通过人数</td>
              <td>{{ recruitMes.recruit.passpeople }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="labbox">
        <img :src="recruitMes.laboratory.image" class="img-thumbnail" alt="..." />
        <div class="info">
          <p>规模：{{ recruitMes.laboratory.scale }}</p>
          <p>地址：{{ recruitMes.laboratory.site }}</p>
          <p>实验室老师：{{ user.name }}</p>
          <p>职称：{{ user.professionalTitle }}</p>
          <p>联系方式：{{ user.telephone }}</p>
        </div>
        <div class="mybtn" v-if="myuser"><button class="btn btn-primary" v-if="myuser.type === '1'" @click="joinMyLab">申请加入该实验室</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import { studentDeliver } from '@/api/deliver'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getRecruit } from '@/api/recruit'
import { getTeacher } from '@/api/user'
export default {
  name: 'RecruitItem',
  data() {
    return {
      recruitMes: {},
      flag: false,
      user: {},
      myuser: {}
    }
  },

  mounted() {
    this.getMessage()
    this.myuser = this.$store.state.user.profile
  },

  methods: {
    async getMessage() {
      const data = await getRecruit(this.$route.params.id)
      this.recruitMes = data[0]
      const datauser = await getTeacher(data[0].recruit.teacherid)
      const { name, telephone, professionalTitle } = datauser
      this.user = { name, telephone, professionalTitle }
      this.flag = true
    },
    async joinMyLab() {
      const flag = this.$store.state.user.profile
      if (flag.resume === null || flag.resume === '') {
        ElMessage({ type: 'warning', message: '你还没有添加简历哦，先去添加简历吧' })
      } else {
        ElMessageBox.confirm('确认投递该实验室？', '温馨提示', {
          iconClass: 'el-icon-question', // 自定义图标样式
          confirmButtonText: '确认', // 确认按钮文字更换
          cancelButtonText: '取消', // 取消按钮文字更换
          showClose: true, // 是否显示右上角关闭按钮
          type: 'warning' // 提示类型  success/info/warning/error
        })
          .then(async () => {
            const data = await studentDeliver(this.$route.params.id)
            if (data === '投递成功') {
              ElMessage({ type: 'success', message: data })
            } else if (data === '你已加入实验室，无法投递') {
              ElMessage({ type: 'warning', message: data })
            } else if (data === '你已投递且处于处理状态,勿重复投递') {
              ElMessage({ type: 'warning', message: data })
            }
          })
          .catch(function (err) {
            console.log(err)
            ElMessage({ type: 'warning', message: '投递失败' })
          })
      }
    }
  }
}
</script>

<style scoped lang="less">
nav {
  margin: 10px 0;
  font-size: 18px;
}

td {
  text-align: center;
  line-height: 30px;
}
.mainbox {
  background-color: @appColor;
  display: flex;
  .box {
    padding: 15px 15px 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 50%;
    max-width: 60%;
  }
  .labbox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 15px 15px 0;
    img {
      min-width: 100%;
      max-height: 60%;
    }
    .info {
      text-align: center;
      margin-top: 15px;
    }
    .mybtn {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
