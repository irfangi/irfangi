<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script>
export default {
  created(){
    this.$colorMode.preference = 'light'
  }
}
</script>
