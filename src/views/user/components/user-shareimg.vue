<template>
  <div class="user-img">
    <ul class="view col-8" v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="index">
        <img :src="item" />
        <div class="delect" @click="delect(index)">×</div>
      </li>
    </ul>
    <input type="file" class="form-control" id="img-file" multiple @change="upload" />
    <div class="upload col-4" @click="getFile">
      <i class="bi bi-plus-square"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserImg',
  data() {
    return {
      list: []
    }
  },
  emits: ['update-imgs'],

  methods: {
    getFile() {
      const file = document.getElementById('img-file')
      file.click()
    },
    upload(e) {
      // 既然如此，循环这个files对象，用for of 循环，
      for (const item of e.target.files) {
        // 正则表达式，判断每个元素的type属性是否为图片形式，如图
        if (!/image\/\w+/.test(item.type)) {
          // 提示只能是图片，return
          alert('只能选择图片')
          return
        }
        // 保存下当前 this ，就是vue实例
        var _this = this
        const reader = new FileReader()
        reader.readAsDataURL(item)
        reader.addEventListener('load', function () {
          _this.list.push(this.result)
        })
      }
      this.$emit('update-imgs', this.list)
    },
    delect(index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
.user-img {
  display: flex;
  align-items: center;
  .upload {
    width: 100px;
    i {
      font-size: 120px;
      // color: gray;
    }
  }

  #img-file {
    display: none;
  }
  .view {
    display: flex;
    background-color: #f4f4f4;
  }
  .view > li {
    width: 180px;
    height: 120px;
    position: relative;
    margin: 0 5px;
  }
  .view > li > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .delect {
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    user-select: none;
    cursor: pointer;
    opacity: 0;
  }
  .delect:hover {
    background-color: rgba(31, 31, 31, 0.5);
    color: white;
  }
  .view > li:hover .delect {
    opacity: 1;
  }
}
</style>
