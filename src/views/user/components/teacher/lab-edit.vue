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
        <input type="text" class="form-control" id="scale" name="scale" v-model="editMessage.scale" />
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
      console.log(this.editMessage)
      try {
        const data = await editLab(this.editMessage)
        if (data === true) {
          this.$message({ type: 'success', text: '修改实验室简介成功' })
          this.$router.go({ path: '/user/lab' })
        }
      } catch (error) {
        this.$message({ type: 'error', text: '修改失败' })
      }
    },
    async addMyLab() {
      try {
        const data = await addLab(this.editMessage)
        if (data === true) {
          this.$message({ type: 'success', text: '添加实验室成功' })
        }
      } catch (error) {
        this.$message({ type: 'error', text: '添加失败' })
      }
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
        this.$message({ type: 'warn', text: '只能选择图片！' })
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
