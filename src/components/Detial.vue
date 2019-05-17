<template>

  <el-container class="detial-container">

    <el-header height="100px">
      <detial-title></detial-title>
    </el-header>

    <el-main>
      <component v-bind:is="componentName"></component>
      <!--<d-search></d-search>-->
      <!--<d-route></d-route>-->
      <!--<d-collections></d-collections>-->
    </el-main>

    <el-footer height="50px">Footer</el-footer>

  </el-container>

</template>

<script>

import DetialTitle from '../components/DetialTitle';
import Search from '../components/Search';
import Route from '../components/Route';
import Collection from '../components/Collection';

export default {
  name: 'Detial',
  data () {
    return {
      componentName : 'detial-search',
    }
  },
  components:{
    'detial-title':DetialTitle,
    'detial-search':Search,
    'detial-route':Route,
    'detial-collection':Collection,
  }
}
</script>

<style lang="scss" scoped>
.detial-container{
  height: 100%;
}
</style>
