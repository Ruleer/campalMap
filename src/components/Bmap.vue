<template>
  <baidu-map :center="center" :zoom="zoom" @ready="handler" class="bmap"></baidu-map>
</template>
<script>
export default {
  data () {
    return {
      center: {lng: 0, lat: 0},
      zoom: 3
    }
  },
  methods: {
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 156.404
      this.center.lat = 69.915
      this.zoom = 15
    }
  }
}
</script>
<style>
.bmap{
  width: 100%;
  height: 400px;
}
</style>
