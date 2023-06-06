<template>
  <div class="time">
    <FontTm1TitleDesc>{{ title }}</FontTm1TitleDesc>
    <FontTm1Desc>{{ subtitle }}</FontTm1Desc>
  </div>
</template>

<script>
export default {
    props: ["title", "subtitle"],
};
</script>

<style>
.time {
  @apply text-black_thm_1 flex flex-col items-center py-2 rounded-md border-2 border-black_thm_1;
}
</style>
