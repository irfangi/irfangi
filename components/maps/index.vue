<template>
  <div style="height: 600px; width: 100%">
    <l-map
      ref="map"
      :use-global-leaflet="false"
      v-model:zoom="zoom"
      :center="center"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
        layer-type="base"
        name="Google maps"
        :zoom="zoom"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 16,
      url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      attribution: `© Google Maps`,
      center:[-7.8259823,110.4816743]
    };
  },
};
</script>

<style></style>
