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
      <l-marker :lat-lng="center"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 16,
      url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      attribution: `© Google Maps`,
      center: [-7.825657, 110.486431],
    };
  },
};
</script>

<style></style>
