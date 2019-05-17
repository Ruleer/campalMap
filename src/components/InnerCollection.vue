<template>
  <div class="inner-collection">

    <div class="top">
      <div class="tag">
        <i class="el-icon-collection-tag"></i>
      </div>
      <div class="title">
        <h1 class="start">起点</h1>
        <i class="el-icon-arrow-right"></i>
        <h1 class="end">终点</h1>
      </div>
    </div>

    <div class="bottom">
      <div class="time">
        <span>出行方式</span>
        <span>约</span>
        <span>1</span>
        <span>分钟</span>
      </div>
      <div class="length">
        <span>总路程</span>
        <span>1</span>
        <span>m</span>
      </div>
      <div class="share">
        <i class="el-icon-share"></i>
        <span>分享</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.inner-collection{
  display: flex;
  height: 100px;
  width: 100%;
  padding: 1px 2px 1px 2px;
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  flex-direction: column;
  align-items: center;
}

.top{
  display: flex;
  height: 70%;
  width: 100%;
  justify-content: space-between;
  .tag{
    display: flex;
    height: 100%;
    width: 5%;
    font-size: 20px;
  }
  .title{
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    i{
      margin: 0 5px 0 5px;
    }
  }
}

.bottom{
  display: flex;
  height: 5%;
  width: 100%;
  justify-content: space-around;
  font-size: 13px;
}
</style>
