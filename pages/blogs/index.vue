<script setup>
const { data:blogs } = await useAsyncData("blog", () =>
  queryContent("/blogs").find()
);
</script>

<template>
  <main>
    <ul>
      <li v-for="(blog, i) of blogs" :key="i">
        <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>

<style></style>
