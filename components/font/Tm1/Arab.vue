<template>
  <p class="arab text-gray-800 dark:text-gray-800"><slot /></p>
</template>

<style scoped>
.arab {
  font-family: "Lateef", serif;
  font-size: 26px;
  line-height: 40px;
  color: black !important;

  @media only screen and (min-width: 640px) {
    font-size: 36px;
    line-height: 52px;
  }
}
</style>
