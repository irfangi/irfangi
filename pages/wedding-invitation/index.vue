<template>
  <div class="main">
    <section class="wedding">
      <div class="container mx-auto">
        <!-- <FontTm1TitleWedding class="text-center mb-4 mb-sm-10"
          >Undangan Pernikahan</FontTm1TitleWedding
        > -->
        <FrameTm1Wedding class="mb-4 mb-sm-10 text-center"
          >Maya & Irfangi</FrameTm1Wedding
        >
        <!-- <div class="grid grid-cols-6 mb-4 mb-sm-10">
          <div class="col-span-12 col-span-md-4 col-span-md-2 col-start-md-2">
            <div class="grid grid-cols-9 grid-cols-md-12 gap-3">
              <OrnamemThreeStrip class="col-span-3" />
              <div class="flex justify-center items-center col-span-3">
                <FontTm1WeddingDate>13</FontTm1WeddingDate>
                <FontTm1WeddingDate class="mx-4">JUL</FontTm1WeddingDate>
                <FontTm1WeddingDate>2023</FontTm1WeddingDate>
              </div>
              <OrnamemThreeStrip right class="col-span-3" />
            </div>
          </div>
        </div> -->
        <!-- <FontTm1TitleWedding class="text-center mb-4 mb-sm-10 pt-4 pt-md-10"
          >Kpd. Bpk/Ibu/Saudara/i</FontTm1TitleWedding
        >
        <FontTm1WeddingDate class="uppercase text-center">{{
          $route.query.to == undefined || $route.query.to == ""
            ? "No Name"
            : $route.query.to
        }}</FontTm1WeddingDate> -->
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
          <FontTm1Arab
            class="col-span-10 col-start-2 text-center mb-4 quotes-text animated"
            >وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
            لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</FontTm1Arab
          >
          <FontTm1Desc
            class="col-span-10 col-start-2 text-center mb-4 quotes-text animated"
            >“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
            dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
            kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda bagi kaum yang berpikir“</FontTm1Desc
          >
          <FontTm1Desc class="col-span-12 text-center quotes-text animated"
            >QS Ar-Rum: 21</FontTm1Desc
          >
        </div>
      </div>
    </section>
    <section class="couple">
      <div class="container mx-auto">
        <div class="grid grid-cols-6 gap-8">
          <!-- <FrameTm1Couple class="col-span-3" image="/maya&irfangi/Maya.png">
          </FrameTm1Couple> -->
          <div class="col-span-3 text-center my-auto">
            <div class="name-couple animated">
              <FontTm1CoupleName>Khoirotul Umayah, S.Pd.</FontTm1CoupleName>
              <FontTm1TitleDesc>Putri dari :</FontTm1TitleDesc>
              <FontTm1Desc>Bpk. Tasrip & <br />Ibu Zumroah</FontTm1Desc>
              <FontTm1Desc>Dari Piyungan, Bantul, Yogyakarta</FontTm1Desc>
            </div>
          </div>
          <div class="col-span-3 flex justify-center">
            <div class="couple__ornamen--left">
              <img
                src="~/assets/images/invitation/thm1/maya.png"
                class="pt-6 animated"
                alt=""
              />
              <FontTm1CoupleName class="text-center"
                >Pengantin Wanita</FontTm1CoupleName
              >
            </div>
          </div>
          <div class="col-span-3 flex justify-center">
            <div class="couple__ornamen--right">
              <img
                src="~/assets/images/invitation/thm1/irfangi.png"
                class="pt-6 animated"
                alt=""
              />
              <FontTm1CoupleName class="text-center"
                >Pengantin Pria</FontTm1CoupleName
              >
            </div>
          </div>
          <div class="col-span-3 text-center my-auto">
            <div class="name-couple animated">
              <FontTm1CoupleName>Irfangi, S.Kom.</FontTm1CoupleName>
              <FontTm1TitleDesc>Putra dari :</FontTm1TitleDesc>
              <FontTm1Desc>Bpk. Kasih Yanto & <br />Ibu Romelah</FontTm1Desc>
              <FontTm1Desc>Dari Kritig, Petanahan, Kebumen</FontTm1Desc>
            </div>
            <!-- <FrameTm1Couple class="col-span-3" image="/maya&irfangi/Irfangi.png">
          </FrameTm1Couple> -->
          </div>
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
      <div class="bg-sage">
        <div class="container mx-auto py-10 rounded-xl mb-10">
          <FontTm1CoupleName class="text-center mb-4 title-date animated"
            >Acara akan di selenggarakan</FontTm1CoupleName
          >
          <div class="grid grid-cols-4 gap-4 mb-10 count-down animated">
            <CardTm1Time :title="days" subtitle="Hari" class="col-span-1" />
            <CardTm1Time :title="hours" subtitle="Jam" class="col-span-1" />
            <CardTm1Time :title="minutes" subtitle="Menit" class="col-span-1" />
            <CardTm1Time :title="seconds" subtitle="Detik" class="col-span-1" />
          </div>
          <div class="grid grid-cols-12">
            <OrnamemThreeStrip
              sm
              left
              class="col-span-4 ornamen-date animated"
            />
            <FontTm1Desc class="text-center col-span-4 event-date animated"
              >Kamis, {{ formatDate(targetDate) }}</FontTm1Desc
            >
            <OrnamemThreeStrip
              sm
              right
              class="col-span-4 ornamen-date animated"
            />
          </div>
          <!-- <div class="flex justify-center mb-4 mt-10">
            <a
              target="_blank"
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NmlqNnFkM2U4cHY2aW8wNmhwNG1za3JodHEgaXJmYW5naTU2NEBt&amp;tmsrc=irfangi564%40gmail.com"
            >
              <button
                class="bg-white_thm_1 hover:bg-gray-400 text-black_thm_1 py-2 px-4 rounded-xl inline-flex items-center shadow"
              >
                <IconsTm1Calender class="mr-3"></IconsTm1Calender>
                <FontTm1Desc class="mr-3">Ingatkan</FontTm1Desc>
                <img
                  border="0"
                  src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"
                />
              </button>
            </a>
          </div> -->
        </div>
      </div>
      <div class="grid grid-cols-6 gap-4 container mx-auto mb-10">
        <div class="col-span-4 col-start-2">
          <div class="bg-sage py-4 rounded-xl event-card animated">
            <FontTm1CoupleName class="text-center mb-4">Akad</FontTm1CoupleName>
            <FontTm1Desc class="text-center mb-4">
              Kamis, {{ formatDate(targetDate) }}
            </FontTm1Desc>
            <FontTm1Desc class="text-center mb-4">
              10:00 - Selesai
            </FontTm1Desc>
            <FontTm1Desc class="text-center mb-4">
              Piyungan Bantul Yogyakarta</FontTm1Desc
            >
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <Maps class="shadow"></Maps>
        <div class="flex justify-center my-4">
          <a
            target="_blank"
            href="https://www.google.com/maps/search/?api=1&query=-7.825657,110.486431"
          >
            <button
              class="bg-white_thm_1 hover:bg-gray-400 text-black_thm_1 py-2 px-4 rounded-xl inline-flex items-center shadow"
            >
              <FontTm1Desc>Arahkan Google Maps</FontTm1Desc>
            </button>
          </a>
        </div>
      </div>
    </section>
    <section class="gift">
      <div class="container mx-auto">
        <FontTm1CoupleName class="text-center mb-4"
          >Kirim Hadiah</FontTm1CoupleName
        >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardTm1Bank
            class="mx-auto"
            rek="8023014309"
            name="Khoirotul Umayah"
            bankImage="/bank/bca_logo.png"
          ></CardTm1Bank>
          <CardTm1Bank
            class="mx-auto"
            rek="185000610904"
            name="Irfangi"
            bankImage="/bank/mandiri_logo.png"
          ></CardTm1Bank>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container mx-auto">
        <!-- form -->
        <FontTm1CoupleName class="text-center mb-4"
          >Pesan & Ucapan</FontTm1CoupleName
        >
        <form class="mb-4 form-chat">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="nama">
              <FontTm1TitleDesc>Nama</FontTm1TitleDesc>
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nama"
              type="text"
              v-model="payload.name"
              placeholder="Nama"
              :class="{
                'border-red-600':
                  errorForm && (payload.name == null || payload.name == ''),
              }"
              required
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 font-bold mb-2" for="desc">
              <FontTm1TitleDesc> Pesan </FontTm1TitleDesc>
            </label>
            <textarea
              rows="4"
              id="desc"
              v-model="payload.desc"
              placeholder="Tulis Ucapan.."
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :class="{
                'border-red-600':
                  errorForm && (payload.desc == null || payload.desc == ''),
              }"
            >
            </textarea>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-gray-500 mb-6 hover:bg-gray-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline mx-auto"
              type="button"
              @click="sendMessage()"
            >
              Kirim
            </button>
          </div>
        </form>
        <!-- chat -->
        <div class="chat-box bg-gray-100">
          <div
            v-for="(message, index) of messages"
            :key="index"
            class="chat bg-gray-50 shadow-md"
          >
            <h6 class="text-gray-800">{{ message.name }}</h6>
            <p class="text-gray-700">{{ message.desc }}</p>
          </div>
        </div>
      </div>
    </footer>
    <IconsTm1Music />
  </div>
</template>

<script setup>
import moment from "moment";
import { ref } from "vue";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://uxujrgxltdedrcxxvafd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4dWpyZ3hsdGRlZHJjeHh2YWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY4Nzk4NDMsImV4cCI6MjAwMjQ1NTg0M30.MHUmBK9h7oVNjeaiX0-cMQkJi8ld7qtJFPdn1REuizY"
);

definePageMeta({
  layout: "blank",
});

useHead({
  title: "Pernikahan Maya & Irfangi",
  bodyAttrs: {
    class: "overflow-hidden",
  },
  meta: [
    {
      name: "description",
      content: "Pernikahan Maya & Irfangi pada 13 Juli 2023",
    },
    { name: "image", content: "https://irfangi.site/wedding-invitation?to=" },
  ],
});

// data
let galery = ref([]);
let messages = ref([]);
let targetDate = ref("07-13-2023");
let days = ref("");
let hours = ref("");
let minutes = ref("");
let seconds = ref("");
let errorForm = ref(false);
let payload = ref({ name: "", desc: "" });

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

// method
function formatDate(date) {
  return moment(date).format("DD MMMM YYYY");
}
// end method
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

const getMessage = async () => {
  try {
    let { data, error, status } = await supabase.from("komentar").select("*");
    if (status == 200) {
      const sorted = data.sort((a, b) => {
        return moment(b.created_at) - moment(a.created_at);
      });
      messages.value = sorted;
    } else {
      console.log("Error " + status + error);
    }
  } catch (error) {
    console.log({ error });
  }
};
const sendMessage = async () => {
  try {
    if (
      payload.value.desc != null &&
      payload.value.desc != "" &&
      payload.value.name != null &&
      payload.value.name != ""
    ) {
      const res = await supabase
        .from("komentar")
        .insert([
          {
            topic: "invitation",
            name: payload.value.name,
            desc: payload.value.desc,
          },
        ])
        .select();
      errorForm.value = false;
      payload.value = { name: "", desc: "" };
      getMessage();
    } else {
      errorForm.value = true;
    }
  } catch (error) {
    console.log({ error });
  }
};
onMounted(() => {
  getMessage();
  // start animate
  // quote
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.target.className == "quote") {
        document
          .querySelectorAll(".quotes-text")[0]
          .classList.add("fadeInLeft");
        document
          .querySelectorAll(".quotes-text")[1]
          .classList.add("fadeInRight");
        document.querySelectorAll(".quotes-text")[2].classList.add("fadeInTop");
      }
      if (entry.isIntersecting && entry.target.className == "couple") {
        document
          .querySelectorAll(".name-couple")[0]
          .classList.add("fadeInLeft");
        document
          .querySelectorAll(".name-couple")[1]
          .classList.add("fadeInRight");
        document
          .querySelector(".couple__ornamen--left img")
          .classList.add("fadeInLeftCustom");
        document
          .querySelector(".couple__ornamen--right img")
          .classList.add("fadeInRightCustom");
      }
      if (entry.isIntersecting && entry.target.className == "date") {
        document.querySelector(".title-date").classList.add("fadeInTop");
        document.querySelector(".count-down").classList.add("fadeInTop");
        document.querySelector(".event-date").classList.add("fadeInTop");
        document.querySelector(".event-card").classList.add("fadeInTop");
        document
          .querySelectorAll(".ornamen-date")[0]
          .classList.add("fadeInLeft");
        document
          .querySelectorAll(".ornamen-date")[1]
          .classList.add("fadeInRight");
      }
    });
  });
  observer.observe(document.querySelector("section.quote"));
  observer.observe(document.querySelector("section.couple"));
  observer.observe(document.querySelector("section.date"));
  // end animate
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
      left: 0;
      max-width: 600px;
      width: 100%;
      @media only screen and (min-width: 768px) {
        left: 150px;
      }
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
      padding: 40px 0;
      @media only screen and (min-width: 640px) {
        padding: 60px 0;
      }
    }

    &.quote {
      padding: 70px 0;
      background: #bad2c0;
    }
    &.couple {
      padding: 70px 0;

      .couple__ornamen {
        &--left {
          width: max-content;
          background: #bad2c0;
          img {
            transform: translateX(-30px);
          }
        }
        &--right {
          width: max-content;
          background: #bad2c0;
          img {
            transform: translateX(30px);
          }
        }
      }
      img {
        &.corner-1 {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: -1;
          width: 200px;
          @media only screen and (min-width: 640px) {
            width: 400px;
          }
        }
        &.corner-2 {
          position: absolute;
          top: 0;
          right: 0;
          z-index: -1;
          transform: rotate(180deg);
          width: 200px;
          @media only screen and (min-width: 640px) {
            width: 400px;
          }
        }
      }
    }

    &.galery {
      @apply p-5;
    }
    &.date {
      padding: 0 0 50px 0;
      .bg-sage {
        background: #bad2c0;
      }
    }
    &.gift {
      // background: #bad2c0;
      padding: 0 0 50px 0;
    }
  }

  // start footer ucapan
  .footer {
    background: #bad2c0;
    padding: 50px 0;
    .form-chat {
      max-width: 600px;
      margin: 0 auto;
    }
    .chat-box {
      height: 70vh;
      border-radius: 18px;
      overflow: auto;
      max-width: 600px;
      margin: 0 auto;
      .chat {
        border-radius: 0px 12px 0 12px;
        margin: 18px;
        padding: 18px;
        h6 {
          font-weight: 600;
          font-size: 20px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }
  // end footer
  // animated start
  @-webkit-keyframes fadeInTop {
    0% {
      opacity: 0;
      -webkit-transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
    }
  }
  @keyframes fadeInTop {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }
  @-webkit-keyframes fadeInLeftCustom {
    0% {
      opacity: 0;
      -webkit-transform: translateX(0);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(-30px);
    }
  }
  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInLeftCustom {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(-30px);
    }
  }
  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translateX(30px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }
  @-webkit-keyframes fadeInRightCustom {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(30px);
    }
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(30px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeInRightCustom {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    100% {
      opacity: 1;
      transform: translateX(30px);
    }
  }
  .animated {
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    &.fadeInTop {
      -webkit-animation-name: fadeInTop;
      animation-name: fadeInTop;
    }
    &.fadeInRight {
      -webkit-animation-name: fadeInRight;
      animation-name: fadeInRight;
    }
    &.fadeInLeft {
      -webkit-animation-name: fadeInLeft;
      animation-name: fadeInLeft;
    }
    &.fadeInRightCustom {
      -webkit-animation-name: fadeInRightCustom;
      animation-name: fadeInRightCustom;
    }
    &.fadeInLeftCustom {
      -webkit-animation-name: fadeInLeftCustom;
      animation-name: fadeInLeftCustom;
    }
  }
  // animated end
}
</style>
