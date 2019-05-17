<template>
  <div class="search">
    <Input search placeholder="Enter something..." />
    <div class="suggestion">
      <h2 class="title">您可能想看</h2>
      <div class="suggestions">
        <el-link type="primary">aaa</el-link>
        <el-link type="primary">bbb</el-link>
        <el-link type="primary">ccc</el-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-starts;
  align-items: center;
}
.suggestion{
  display: flex;
  position: relative;
  top: 10%;
  flex-direction: column;
  justify-self: flex-start;
  align-items: center;
  .title{
    display: flex;
    font-size: 18px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    color: #303133;
  };
  .suggestions{
    display: flex;
    position: relative;
    top: 30px;
    flex-direction: column;
    align-items: center;

  }
}
</style>
