<template>
  <div id="app">
    <div class="col nav-bar">
      <mine-nav></mine-nav>
    </div>
    <div class="col detial">
      <mine-detial></mine-detial>
    </div>
    <div class="col map-container">
      <mine-map></mine-map>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Nav';
import Detial from './components/Detial';
import Bmap from './components/Bmap';

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    'mine-nav':Navbar,
    'mine-detial':Detial,
    'mine-map':Bmap,
  }
}
</script>

<style lang="scss">
#app{
  display: flex;
  background-color: #be0e0e;
}
.col{
  height: 100%;
}
.nav-bar{
  display: flex;
  background-color: #f8f8f9
;
  width: 64px;
}
.detial{
  display: flex;
  background-color: #f8f8f9
;
  width: 30%;
  max-width: 448px;
  min-width: 424px;
}
.map-container{
  width: 100%;
  background-color: #f8f8f9
;
}
</style>
