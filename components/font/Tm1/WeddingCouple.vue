<template>
  <h1><slot /></h1>
</template>

<style scoped>
h1 {
  font-size: 45px;
  font-weight: 700;
  font-family: "Tangerine", cursive;
  @apply text-black_thm_1;
  @media only screen and (min-width: 640px) {
    font-size: 60px;
  }
}
</style>
