<template>
  <div class="card teacher-getnew">
    <div class="card-header"><h3>发布招新信息</h3></div>
    <div class="card-body">
      <div class="row">
        <div class="input-group">
          <span class="input-group-text">招新人数</span>
          <input type="number" class="form-control" id="num" name="num" />
        </div>
        <div class="input-group">
          <label class="input-group-text" for="inputGroupSelect01">招新对象</label>
          <select class="form-select" id="inputGroupSelect01">
            <option value="2" selected>大二</option>
            <option value="1">大一</option>
            <option value="3">大三</option>
            <option value="4">大四</option>
          </select>
        </div>
      </div>
      <div class="row"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TeacherGetnew'
}
</script>
<style lang="less" scoped>
.input-group {
  width: 180px;
  input {
    padding: 5px 5px;
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
