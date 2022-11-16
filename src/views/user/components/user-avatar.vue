<template>
  <div class="user-avatar">
    <div class="card">
      <div class="card-header"><h3>修改头像</h3></div>
      <div class="card-body">
        <div class="old-avatar">
          <label>原头像：</label>
          <img src="@/assets/images/ma.png" class="img-thumbnail" alt="..." />
        </div>

        <div class="new-avatar">
          <!-- 第一行上传组件 -->
          <div class="putAvatar">
            <label for="input-avatar">上传新的头像：</label>
            <input type="file" class="form-control input-avatar" id="input-avatar" @change="upload" />
            <div @click="getFile">
              <i class="bi bi-plus-square"></i>
            </div>
          </div>
          <!-- 第二行裁剪区 -->

          <div class="cut-avartar">
            <div>
              <label for="cropper-container">裁剪区：</label>
              <div class="cropper-container">
                <vueCropper
                  ref="cropper"
                  :img="option.img"
                  :outputSize="option.size"
                  :outputType="option.outputType"
                  :info="option.info"
                  :full="option.full"
                  :canMove="option.canMove"
                  :canMoveBox="option.canMoveBox"
                  :original="option.original"
                  :autoCrop="option.autoCrop"
                  :canScale="option.canScale"
                  :centerBox="option.centerBox"
                  :high="option.high"
                  :fixedNumber="option.fixedNumber"
                ></vueCropper>
              </div>
            </div>
            <div>
              <label for="cutted">预览：</label>
              <img :src="userAvatar" class="img-thumbnail cutted" alt="..." />
            </div>
            <button class="btn btn-primary" @click="handleCropperPhoto">裁剪</button>
          </div>
          <!-- 第三行按钮 -->
          <div class="btns">
            <button class="btn btn-primary" @click="updateAvatar">确认修改头像</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
export default {
  name: 'UserAvatar',
  components: { VueCropper },
  data() {
    return {
      userAvatar: '',
      option: {
        img: '',
        outputSize: 1, // 剪切后的图片质量（0.1-1）
        full: false, // 输出原图比例截图 props名full
        outputType: 'png', // 裁剪生成图片的格式
        canMove: true, // 上传图片是否可以移动
        original: false, // 上传图片按照原始比例渲染
        canMoveBox: true, // 截图框是否可以拖动
        autoCrop: true, // 是否默认生成截图框
        info: true, // 裁剪框的大小信息
        canScale: true, // 图片是否允许滚轮缩放
        fixed: true, // 是否开启截图框宽高固定比例
        centerBox: true, // 截图框是否被限制在图片里面
        high: true // 是否按照设备的dpr 输出等比例图片
      }
    }
  },
  methods: {
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
        return
      }
      this.option.img = URL.createObjectURL(item)
      this.userAvatar = this.option.img
    },
    // 修改头像
    updateAvatar() {
      // 修改后端的头像
      // 修改store
      console.log(this.userAvatar)
      this.$store.commit('user/updateAvatar', this.userAvatar)
    },
    // 获取 base64 截图数据并放置到预览
    handleCropperPhoto() {
      this.$refs.cropper.getCropData((data) => {
        this.userAvatar = data
      })
    }
  }
}
</script>
<style lang="less" scoped>
img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.card-body {
  .new-avatar {
    > div {
      margin-top: 15px;
    }
    .putAvatar {
      display: flex;
      align-items: center;
      .input-avatar {
        display: none;
      }
      i {
        font-size: 60px;
      }
    }

    .cut-avartar {
      display: flex;
      align-items: center;
      > button {
        height: 40px;
      }
      > div {
        display: flex;
        align-items: center;
        margin-right: 15px;
        .cropper-container {
          width: 155px;
          height: 155px;
        }
        // img {
        //   border: none;
        // }
      }
    }
  }
}
</style>
