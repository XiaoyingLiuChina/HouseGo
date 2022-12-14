<template>
  <div class="editbox">
    <div class="row mb-2">
      <div class="input-group">
        <span class="input-group-text">实验室名称</span>
        <input type="text" class="form-control" id="name" name="name" v-model="editMessage.name" min="0" maxlength="8" />
      </div>
    </div>
    <div class="row mb-2">
      <div class="input-group">
        <span class="input-group-text">实验室地址</span>
        <input type="text" class="form-control" id="site" name="site" v-model="editMessage.site" min="0" />
      </div>
    </div>
    <div class="row mb-2">
      <div class="input-group">
        <span class="input-group-text">实验室规模</span>
        <!-- <input type="text" class="form-control" id="scale" name="scale" v-model="editMessage.scale" /> -->
        <select class="form-select" id="inputGroupSelect01" v-model="editMessage.scale">
          <option value=""></option>
          <option value="0~20">0~20</option>
          <option value="20~40">20~40</option>
          <option value="40~60">40~60</option>
          <option value="60+">60+</option>
        </select>
      </div>
    </div>
    <div class="row mb-2">
      <div class="input-group">
        <span class="input-group-text">实验室简介</span>
        <textarea class="form-control" id="introduce" name="introduce" v-model="editMessage.introduce" min="0"></textarea>
      </div>
    </div>
    <div class="row mb-2">
      <div class="input-group">
        <span class="input-group-text">图片上传</span>

        <span class="iconspan" @click="getFile"> <i class="bi bi-plus"></i></span>
        <input type="file" class="form-control input-avatar" id="input-avatar" @change="upload" />
      </div>
    </div>
    <img :src="editMessage.image" class="img-thumbnail mb-2" alt="..." />
    <div class="col-12">
      <button class="btn btn-primary mb-3" @click="editMyLab" v-if="editMessage.id">修改实验室</button>
      <button class="btn btn-primary mb-3" @click="addMyLab" v-else>添加实验室</button>
    </div>
  </div>
</template>
<script>
import { editLab, addLab } from '@/api/labs'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: 'LabEdit',
  data() {
    return {
      editMessage: this.$store.state.user.profile.lab
    }
  },
  mounted() {
    if (!this.editMessage) {
      this.editMessage = {
        name: '',
        site: '',
        introduce: '',
        scale: '',
        image: ''
      }
    }
  },
  methods: {
    async editMyLab() {
      ElMessageBox.confirm('确认修改实验室简介？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await editLab(this.editMessage)
          if (data === true) {
            ElMessage({ type: 'success', message: '修改实验室简介成功' })
            this.$router.go({ path: '/user/lab' })
          }
        })
        .catch(function (err) {
          console.log(err)
          ElMessage({ type: 'error', message: '修改失败' })
        })
    },
    async addMyLab() {
      ElMessageBox.confirm('确认创建实验室？', '温馨提示', {
        iconClass: 'el-icon-question', // 自定义图标样式
        confirmButtonText: '确认', // 确认按钮文字更换
        cancelButtonText: '取消', // 取消按钮文字更换
        showClose: true, // 是否显示右上角关闭按钮
        type: 'warning' // 提示类型  success/info/warning/error
      })
        .then(async () => {
          const data = await addLab(this.editMessage)
          if (data === true) {
            ElMessage({ type: 'success', message: '创建实验室成功' })
          }
        })
        .catch(function (err) {
          console.log(err)
          ElMessage({ type: 'error', message: '创建失败' })
        })
    },
    getFile() {
      const file = document.getElementById('input-avatar')
      file.click()
    },
    upload(e) {
      const item = e.target.files[0]
      // 判断是否为图片
      if (!/image\/\w+/.test(item.type)) {
        // 提示只能是图片，return
        ElMessage({ type: 'warning', message: '只能选择图片！' })
      }
      // this.labImg = URL.createObjectURL(item)
      // 这里使用 FileReader来获取图片的base64编码
      const reader = new FileReader()
      reader.onload = () => {
        // 打印图片的base64编码
        // console.log(reader.result)
        // 把base64编码赋值给图片的src
        this.editMessage.image = reader.result
      }
      reader.readAsDataURL(item)
    }
  }
}
</script>
<style lang="less" scoped>
.input-group {
  input {
    padding: 5px 10px;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
  }
}
.editbox {
  width: 70%;
  .iconspan {
    width: 40px;
    text-align: center;
    i {
      font-size: 20px;
    }
    border: 1px solid black;
  }
  input[type='file'] {
    display: none;
  }
  img {
    height: 100px;
  }
}
</style>
