<template>
  <baidu-map :center="center" :zoom="zoom" @ready="handler" class="mmap"></baidu-map>
</template>
<script>
export default {
  name: 'Bmap2',
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    }
  }
}
</script>

<style lang="scss">
.mmap {
  width: 100%;
  height: 400px;
}
</style>
