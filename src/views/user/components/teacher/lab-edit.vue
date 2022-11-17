<template>
  <div class="lab-edit">
    <div class="card teacher-getnew">
      <div class="card-header"><h3>修改实验室信息</h3></div>
      <div class="card-body">
        <div class="first-row row mb-2">
          <div class="input-group">
            <span class="input-group-text">实验室名称</span>
            <input type="text" class="form-control" id="name" name="name" v-model="editMessage.labName" min="0" />
          </div>
        </div>
        <div class="row mb-2">
          <div class="input-group">
            <span class="input-group-text">实验室地址</span>
            <input type="text" class="form-control" id="name" name="name" v-model="editMessage.labAddress" min="0" />
          </div>
        </div>
        <div class="row mb-2">
          <div class="input-group">
            <span class="input-group-text">实验室规模</span>
            <input type="text" class="form-control" id="message" name="message" v-model="editMessage.labSCale" />
          </div>
        </div>
        <div class="row mb-2">
          <div class="input-group">
            <span class="input-group-text">实验室简介</span>
            <textarea class="form-control" id="floatingTextarea" name="name" v-model="editMessage.labIntroduction" min="0"></textarea>
          </div>
        </div>
        <div class="row mb-2">
          <div class="input-group">
            <span class="input-group-text">图片上传</span>
            <input type="file" class="form-control input-avatar" id="input-avatar" @change="upload" />
            <!-- <input type="text" class="form-control" id="message" name="message" v-model="editMessage.labImage" /> -->
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-outline-dark" type="submit">提交修改</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LabEdit',
  data() {
    return {
      editMessage: {
        labName: '',
        labAddress: '',
        labIntroduction: '',
        labSCale: '',
        labImage: ''
      }
    }
  },
  methods: {}
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
</style>
