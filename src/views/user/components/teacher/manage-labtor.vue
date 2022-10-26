<template>
  <div class="manage-labtor">
    <div class="card">
      <div class="card-header">
        <h3>查看已申请人员信息</h3>
      </div>
      <div class="card-body">
        <div class="card-title">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="人员关键词" />
            <button class="btn btn-primary" type="button" id="button-addon2">搜索</button>
          </div>
        </div>
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">学号</th>
              <th scope="col">姓名</th>
              <th scope="col">班级</th>
              <th scope="col">问卷详情</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 5" :key="item">
              <th scope="row">{{ item }}</th>
              <td>{{ `512019330${item}` }}</td>
              <td>宋洋</td>
              <td>软件1902</td>
              <td>问卷</td>
              <td>
                <button class="btn btn-secondary btn-sm">拒绝</button>
                <button class="btn btn-primary btn-sm">同意</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ManageLabtor'
}
</script>
<style lang="less" scoped>
button {
  margin-right: 5px;
}
.card-title {
  width: 40%;
}
input {
  display: block;
  padding: 5px 5px;
  width: 250px;
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
</style>
