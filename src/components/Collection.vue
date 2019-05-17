<template>
  <div class="collection">
    <inner-collection></inner-collection>
  </div>
</template>

<script>

import InnerCollection from '../components/InnerCollection';

export default {
  name: 'Collection',
  data () {
    return {

    }
  },
  components:{
    'inner-collection':InnerCollection,
  },
}
</script>

<style lang="scss" scoped>
.collection{
  height: 100%;
}
</style>
