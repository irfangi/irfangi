<template>
  <div class="main">
    <section class="wedding">
      <div class="container mx-auto">
        <FontTm1TitleWedding class="text-center mb-10"
          >Undangan Pernikahan</FontTm1TitleWedding
        >
        <FrameTm1Wedding class="mb-10">Maya & Irfangi</FrameTm1Wedding>
        <div class="grid grid-cols-4 mb-10">
          <div class="col-span-2 col-start-2">
            <div class="grid grid-cols-3">
              <OrnamemThreeStrip />
              <div class="flex justify-center items-center">
                <FontTm1WeddingDate>12</FontTm1WeddingDate>
                <FontTm1WeddingDate class="mx-4">JUL</FontTm1WeddingDate>
                <FontTm1WeddingDate>2023</FontTm1WeddingDate>
              </div>
              <OrnamemThreeStrip right />
            </div>
          </div>
        </div>
        <FontTm1TitleWedding class="text-center mb-10">Kpd. Bpk/Ibu/Saudara/i</FontTm1TitleWedding>
        <FontTm1WeddingDate class="uppercase text-center">Ahmad Qorib</FontTm1WeddingDate>
      </div>
      <img src="~/assets/images/invitation/thm1/bursh-effect.png" alt="Bursh Effect" class="bursh-1">
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "blank",
});
</script>

<style lang="scss" scoped>
.main {
  background: #f8fafc;
  .wedding {
    padding: 100px 0;
    img{
        &.bursh-1{
            position: absolute;
            top:0;
            left:0;
        }
    }
  }
}
</style>
