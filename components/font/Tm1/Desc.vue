<template>
  <p class="desc"><slot /></p>
</template>

<style scoped>
.desc {
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  @media only screen and (min-width: 640px) {
    font-size: 20px;
    line-height: 32px;
  }
}
</style>
