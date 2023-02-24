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
            <div class="grid grid-cols-3 gap-3">
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
        <FontTm1TitleWedding class="text-center mb-10"
          >Kpd. Bpk/Ibu/Saudara/i</FontTm1TitleWedding
        >
        <FontTm1WeddingDate class="uppercase text-center"
          >Ahmad Qorib</FontTm1WeddingDate
        >
      </div>
    </section>
    <!-- ornamen -->
    <img
      src="~/assets/images/invitation/thm1/bursh-effect.png"
      alt="Bursh Effect"
      class="bursh-1"
    />
    <img
      src="~/assets/images/invitation/thm1/bursh-effect-2.png"
      alt="Bursh Effect"
      class="bursh-2"
    />
    <img
      src="~/assets/images/invitation/thm1/bursh-effect-3.png"
      alt="Bursh Effect"
      class="bursh-3"
    />
    <section class="quote">
      <div class="container mx-auto">
        <div class="grid grid-cols-12">
          <FontTm1Arab class="col-span-10 col-start-2 text-center mb-4"
            >وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
            لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</FontTm1Arab
          >
          <FontTm1Desc class="col-span-10 col-start-2 text-center mb-4"
            >“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berpikir“</FontTm1Desc
          >
          <FontTm1Desc class="col-span-12 text-center"
            >QS Ar-Rum: 21</FontTm1Desc
          >
        </div>
      </div>
    </section>
    <section class="couple">
      <div class="container mx-auto">
        <div class="grid grid-cols-6">
          <FrameTm1Couple class="col-span-3" image="/maya&irfangi/Maya.png">
          </FrameTm1Couple>
          <div class="col-span-3 text-center my-auto">
            <FontTm1CoupleName>Khoirotul Umayah</FontTm1CoupleName>
            <FontTm1TitleDesc>Putri dari :</FontTm1TitleDesc>
            <FontTm1Desc>Bpk. Supri & <br />Ibu Siti Sumringah</FontTm1Desc>
            <FontTm1Desc>Dari Bantul Yogyakarta</FontTm1Desc>
          </div>
          <div class="col-span-3 text-center my-auto">
            <FontTm1CoupleName>Irfangi</FontTm1CoupleName>
            <FontTm1TitleDesc>Putri dari :</FontTm1TitleDesc>
            <FontTm1Desc>Bpk. Kasihyanto & <br />Ibu Romelah</FontTm1Desc>
            <FontTm1Desc>Dari Kritig, Petanahan, Kebumen</FontTm1Desc>
          </div>
          <FrameTm1Couple class="col-span-3" image="/maya&irfangi/Irfangi.png">
          </FrameTm1Couple>
        </div>
      </div>
      <img
      class="corner-1"
        src="~/assets/images/invitation/thm1/corner.png"
        alt="Frame Corner"
      />
      <img class="corner-2" src="~/assets/images/invitation/thm1/corner.png" alt="Frame Corner">
    </section>

    <section class="galery">

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
  position: relative;

  @apply bg-white_thm_1;
  img {
    &.bursh-1 {
      position: absolute;
      top: 0;
      width: 600px;
      left: 200px;
    }
    &.bursh-2 {
      position: absolute;
      top: 300px;
      left: 0;
    }
    &.bursh-3 {
      position: absolute;
      top: 120px;
      right: 0;
      height: 700px;
    }
  }
  section {
    z-index: 1;
    position: relative;
    &.wedding {
      padding: 100px 0;
    }

    &.quote {
      padding: 70px 0;
      @apply bg-gray-200;
    }
    &.couple {
      padding: 70px 0;

      img {
        &.corner-1{
          position: absolute;
          bottom: 0;
          left: 0;
        }
        &.corner-2{
          position: absolute;
          top: 0;
          right: 0;
          transform: rotate(180deg);
        }
      }
    }

    &.galery{
      @apply p-5;
    }
  }
}
</style>
