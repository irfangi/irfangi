<template>
  <div class="couple-frame">
    <img
      class="frame"
      src="~/assets/images/invitation/thm1/bingkai_couple.png"
      alt="Couple Frame"
    />
    <img
      class="frame-image"
      :src="image"
      alt="Couple Image"
    />
  </div>
</template>

<style scoped>
.couple-frame {
  position: relative;
}
.frame-image {
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-45%, -52%);
  position: absolute;
  width: 350px;
}
</style>

<script>
export default {
  props: ["image"],
};
</script>
