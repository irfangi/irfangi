<template>
  <p class="arab"><slot /></p>
</template>

<style scoped>
.arab {
  font-family: "Lateef", serif;
  font-size: 26px;
  line-height: 40px;
  @apply text-black_thm_1;
  @media only screen and (min-width: 640px) {
    font-size: 36px;
    line-height: 52px;
  }
}
</style>
