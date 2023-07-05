<template>
  <h2 class="text-gray-800 dark:text-gray-800"><slot /></h2>
</template>

<style scoped>
h2 {
  font-size: 18px;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  @apply text-black_thm_1;
  @media only screen and (min-width: 640px) {
    font-size: 24px;
  }
}
</style>
