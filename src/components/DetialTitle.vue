<template>
  <div class="DetialTitle">

    <div class="back">
      <i class="el-icon-arrow-left"></i>
    </div>

    <div class="text">
      <h2>搜索</h2>
    </div>

    <div class="reserved">
    </div>

  </div>
</template>

<script>
export default {
  name: 'DetialTitle',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.DetialTitle{
  display: flex;
  height: 100%;
  width: 100%;

}

.back{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 15%;
  background-color: #f8f8f9;
  justify-content: center;
  .el-icon-arrow-left{
    font-size: 30px;
  }
}

.text{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  background-color: #f8f8f9;
  justify-content: center;
}

.reserved{
  display: flex;
  height: 100%;
  width: 15%;
  background-color: #f8f8f9;
}
</style>
