<template>
  <div class="box-frame">
    <img
      src="~/assets/images/invitation/thm1/bingkai_couple.png"
      alt="Frame Wedding"
    />
    <FontTm1WeddingCouple class="couple"><slot /></FontTm1WeddingCouple>
  </div>
</template>
<style scoped>
.box-frame {
  @apply relative flex justify-center items-center;
}
.couple {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

img {
  width: 100%;
  max-width: 460px;
}
</style>
