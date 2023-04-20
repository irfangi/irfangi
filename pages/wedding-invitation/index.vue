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
      <img
        class="corner-2"
        src="~/assets/images/invitation/thm1/corner.png"
        alt="Frame Corner"
      />
    </section>

    <section class="galery bg-gray-200 hidden">
      <div class="grid grid-cols-4 gap-4">
        <div
          v-for="(data, index) of galery"
          :key="index"
          :class="{
            'row-span-2': index == 2 || index == 5,
            'flex items-end': index == 5,
          }"
        >
          <img :src="data.link" :alt="data.name" />
        </div>
      </div>
    </section>

    <section class="date">
      <div class="container mx-auto bg-gray-200 py-10 rounded-xl mb-10">
        <FontTm1CoupleName class="text-center mb-4"
          >Acara akan di selenggarakan</FontTm1CoupleName
        >
        <div class="grid grid-cols-8 gap-4 mb-10">
          <CardTm1Time
            :title="days"
            subtitle="Hari"
            class="col-span-1 col-start-3"
          />
          <CardTm1Time :title="hours" subtitle="Jam" class="col-span-1" />
          <CardTm1Time :title="minutes" subtitle="Menit" class="col-span-1" />
          <CardTm1Time :title="seconds" subtitle="Detik" class="col-span-1" />
        </div>
        <div class="grid grid-cols-3">
          <OrnamemThreeStrip sm left />
          <FontTm1Desc class="text-center">{{ targetDate }}</FontTm1Desc>
          <OrnamemThreeStrip sm right />
        </div>
        <div class="flex justify-center mb-4 mt-10">
          <button
            class="bg-white_thm_1 hover:bg-gray-400 text-black_thm_1 py-2 px-4 rounded-xl inline-flex items-center shadow"
          >
            <IconsTm1Calender class="mr-3"></IconsTm1Calender>
            <FontTm1Desc>Simpan tanggal acara ke kalender</FontTm1Desc>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-4 container mx-auto">
        <div class="col-span-4 col-start-2">
          <div class="bg-gray-200 py-4 rounded-xl">
            <FontTm1CoupleName class="text-center mb-4"
              >Resepsi</FontTm1CoupleName
            >
            <FontTm1Desc class="text-center mb-4">
              {{ targetDate }}
            </FontTm1Desc>
            <FontTm1Desc class="text-center mb-4"> 11:00 - 13:00 </FontTm1Desc>
            <FontTm1Desc class="text-center mb-4">
              SMP Pembangunan Piyungan</FontTm1Desc
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({
  layout: "blank",
});
// data
let galery = ref([]);
let targetDate = ref("07-16-2023");
let days = ref("");
let hours = ref("");
let minutes = ref("");
let seconds = ref("");

// insert data
// galery = [
//   { name: "Galery 1", link: "/maya&irfangi/galery/1.jpg" },
//   { name: "Galery 2", link: "/maya&irfangi/galery/2.jpg" },
//   { name: "Galery 6", link: "/maya&irfangi/galery/6.jpg" },
//   { name: "Galery 3", link: "/maya&irfangi/galery/3.jpg" },
//   { name: "Galery 4", link: "/maya&irfangi/galery/4.jpg" },
//   { name: "Galery 7", link: "/maya&irfangi/galery/7.jpg" },
//   { name: "Galery 5", link: "/maya&irfangi/galery/5.jpg" },
//   { name: "Galery 8", link: "/maya&irfangi/galery/8.jpg" },
//   { name: "Galery 9", link: "/maya&irfangi/galery/9.jpg" },
//   { name: "Galery 10", link: "/maya&irfangi/galery/10.jpg" },
// ];

// call countdown
setInterval(() => {
  const now = new Date().getTime();
  const distance = new Date(targetDate.value).getTime() - now;

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours.value = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    days.value = "0";
    hours.value = "0";
    minutes.value = "0";
    seconds.value = "0";
    clearInterval();
  }
}, 1000);
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
        &.corner-1 {
          position: absolute;
          bottom: 0;
          left: 0;
        }
        &.corner-2 {
          position: absolute;
          top: 0;
          right: 0;
          transform: rotate(180deg);
        }
      }
    }

    &.galery {
      @apply p-5;
    }
    &.date {
      padding: 50px 0;
    }
  }
}
</style>
