<template>
  <p class="wedding-date text-gray-800 dark:text-gray-800"><slot /></p>
</template>

<style scoped>
.wedding-date {
  font-size: 18px;
  font-weight: 600;
  font-family: "Open Sans", sans-serif;
  @media only screen and (min-width: 640px) {
      font-size: 24px;
  }
}
</style>
