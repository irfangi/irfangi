<template>
  <main>
    <h1>Zion Adventure Photog</h1>

    <ul>
      <li v-for="(blog, i) of blogs" :key="i">
        <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "blog",
});
const { data: blogs } = await useAsyncData("blog", () =>
  queryContent("/blogs").find()
);
</script>
<style scoped>
h1 {
  font-size: 38px;
  @apply text-center;
}
</style>
