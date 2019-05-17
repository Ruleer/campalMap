<template>
  <div class="option">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#f8f8f9"
      active-text-color="#BE0E0E"
      :collapse="iscollapse" >
      <el-menu-item index="1" id="search">
        <i class="el-icon-search"></i>
        <span slot="title">搜索</span>
      </el-menu-item>
      <el-menu-item index="2" id="route">
        <i class="el-icon-stopwatch"></i>
        <span slot="title">路线</span>
      </el-menu-item>
      <el-menu-item index="3" id="collections">
        <i class="el-icon-collection"></i>
        <span slot="title">收藏</span>
      </el-menu-item>
      <el-menu-item index="4" id="no">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavOption',
  data () {
    return {
      iscollapse: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
