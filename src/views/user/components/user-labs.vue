<template>
  <div class="user-labs">
    <div class="card">
      <div class="card-header">
        <h3>已申请实验室</h3>
      </div>
      <div class="card-body">
        <table class="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">实验室名称</th>
              <th scope="col">实验室简介</th>
              <th scope="col">申请时间</th>
              <th scope="col">问卷详情（可点击下载）</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in 5" :key="item">
              <th scope="row">{{ item }}</th>
              <td>可视化实验室</td>
              <td>王松老师带飞</td>
              <td>2020-02-15</td>
              <td>问卷</td>
              <td><button class="btn btn-primary btn-sm">撤销申请</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserLabs'
}
</script>
<style lang="less" scoped></style>
