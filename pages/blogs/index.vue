<script setup>
const { data:blogs } = await useAsyncData("blog", () =>
  queryContent("/blogs").find()
);
</script>

<template>
  <main>
    <div class="container mx-auto">
      test
    </div>
    <ul>
      <li v-for="(blog, i) of blogs" :key="i">
        <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style></style>
