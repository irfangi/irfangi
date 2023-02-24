<template>
  <div class="three-strip" :class="{ right: right }"></div>
</template>
<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.three-strip.right {
  transform: rotate(180deg);
}
.three-strip {
  height: 40px;
  width: 100%;
  @apply border-t-2 border-b-2 border-black_thm_1 relative;
}
.three-strip::before {
  content: "";
  border: 1px solid black;
  width: 70%;
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
