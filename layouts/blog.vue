<template>
  <div class="bg-gray-50 main">
    <nav class="bg-transparent"
      >
      <div class="container mx-auto">
        <div class="py-4">
          <NuxtLink to="/">Back To Home</NuxtLink>
        </div>
      </div>
    </nav>
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.main {
  min-height: 100vh;
  width: 100%;
  position: relative;
}
.footer {
  margin-top: 100px;
}
.menu .menu__item {
  font-family: "JetBrains Mono", monospace;
  font-size: 16px;
}
</style>
