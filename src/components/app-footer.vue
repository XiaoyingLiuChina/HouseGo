<template>
  <footer class="app-footer">
    <!-- 版权信息 -->
    <div class="copyright">
      <p>
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">搜索推荐</a>
        <a href="javascript:;">友情链接</a>
      </p>
      <p>CopyRight © 软件开发实践2小分队</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter'
}
</script>
<style scoped lang="less">
.app-footer {
  background-color: #e3f2fd;
  .copyright {
    height: 140px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;
    p {
      line-height: 1;
      margin-bottom: 20px;
    }
    a {
      text-decoration: none;
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
