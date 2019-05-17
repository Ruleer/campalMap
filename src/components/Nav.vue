<template>
  <div class="nav">
		<div class="top">
      <Avatar style="background-color: #87d068" icon="ios-locate" />
		</div>
		<div class="main">
      <nav-option></nav-option>
		</div>
		<div class="bottom">
      <user></user>
		</div>
	</div>
</template>

<script>

import Avatar from '../components/Avatar';
import NavOption from '../components/NavOption';

export default {
  name: 'navbar',
  data () {
    return {

    }
  },
  components:{
    'nav-option':NavOption,
    'user':Avatar,
  }
}
</script>

<style lang="scss" scoped>
  .nav{
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid #DCDFE6;
  }

  .top{
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: center;
    justify-content: center;
  }

  .bottom{
    display: flex;
    flex-direction: column;
    height: 50px;
    align-items: center;
    justify-content: flex-start;
  }
</style>
