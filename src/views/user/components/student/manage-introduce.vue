<template>
  <div class="user-introduce">
    <div class="card">
      <div class="card-header">
        <h3>个人简介</h3>
      </div>
      <div class="card-body">
        <!-- <label for="exampleDataList" class="form-label">的热热热退热贴</label>
        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
        <datalist id="datalistOptions">
          <option value="San Francisco"></option>
          <option value="New York"></option>
          <option value="Seattle"></option>
          <option value="Los Angeles"></option>
          <option value="Chicago"></option>
        </datalist> -->
        <div class="row">
          <div class="mb-3 col-6">
            <label for="first" class="form-label">第一志愿</label>
            <input type="text" class="form-control" id="first" />
          </div>
          <div class="mb-3 col-6">
            <label for="second" class="form-label">第二志愿</label>
            <input type="text" class="form-control" id="second" />
          </div>
          <div class="mb-3 col">
            <label for="score" class="form-label">绩点</label>
            <input type="number" class="form-control" id="score" />
          </div>
        </div>

        <div class="mb-3">
          <label for="comment" class="form-label">自我评价</label>
          <textarea class="form-control" id="comment" rows="3"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserIntroduce'
}
</script>
<style lang="less" scoped>
input {
  display: block;
  padding: 5px 5px;
  width: 250px;
  height: 30px;
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
