<template>
  <h4><slot /></h4>
</template>

<style scoped>
h4 {
  font-size: 36px;
  font-weight: 600;
  font-family: "Tangerine", cursive;
  @apply text-black_thm_1;
  @media only screen and (min-width: 640px) {
    font-size: 48px;
  }
}
</style>
