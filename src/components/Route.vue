<template>
  <div class="route">

      <div class="input">
        <div class="input-detial">
          <el-input placeholder="请输入起点" suffix-icon="el-icon-d-arrow-right" v-model="input1"></el-input>
          <el-input placeholder="请输入终点" suffix-icon="el-icon-d-arrow-left" v-model="input1"></el-input>
        </div>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>

      <div class="history">
        <h2 class="title">历史记录</h2>
        <div class="history-detial">
          <el-link type="primary">aaa</el-link>
          <el-link type="primary">bbb</el-link>
          <el-link type="primary">ccc</el-link>
        </div>
      </div>

      <div class="white">
        <h2 class="title">小白路线</h2>
        <div class="white-detial">
          <el-link type="primary">小白上课线</el-link>
          <el-link type="primary">小白地铁线</el-link>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Router',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.route{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-starts;
  align-items: center;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.input{
  display: flex;
  width: 100%;
  align-items: center;
  .input-detial{
    display: flex;
    width: 75%;
    margin-right: 5px;
    flex-direction: column;
    justify-content: space-between;
  }
  .el-button{
    width: 25%;
    height: 45%;
    margin-left: 5px;
  }
}
.el-input{
  margin-top: 5px;
}
.history{
  display: flex;
  position: relative;
  top: 10%;
  flex-direction: column;
  justify-self: flex-start;
  align-items: center;
  .title{
    display: flex;
    font-size: 18px;
    color: #303133;
  };
  .history-detial{
    display: flex;
    position: relative;
    top: 30px;
    flex-direction: column;
    align-items: center;
  }
}

.white{
  display: flex;
  position: relative;
  top: 25%;
  flex-direction: column;
  justify-self: flex-start;
  align-items: center;
  .title{
    display: flex;
    font-size: 18px;
    color: #303133;
  };
  .white-detial{
    display: flex;
    position: relative;
    top: 30px;
    flex-direction: column;
    align-items: center;
  }
}
</style>
