<template>
  <div class="music-player-box">
    <div class="cover" :class="{ active: isOpen }">
      <section class="wedding">
        <div class="container mx-auto">
          <FontTm1TitleWedding class="text-center mb-10"
            >Undangan Pernikahan</FontTm1TitleWedding
          >
          <FrameTm1Wedding class="mb-10 text-center"
            >Maya & Irfangi</FrameTm1Wedding
          >
          <div class="grid grid-cols-6 mb-10">
            <div class="col-span-4 col-span-md-2 col-start-2">
              <div class="grid grid-cols-12 gap-3">
                <OrnamemThreeStrip class="col-span-3" />
                <div class="flex justify-center items-center col-span-6">
                  <FontTm1WeddingDate>13</FontTm1WeddingDate>
                  <FontTm1WeddingDate class="mx-4">JUL</FontTm1WeddingDate>
                  <FontTm1WeddingDate>2023</FontTm1WeddingDate>
                </div>
                <OrnamemThreeStrip right class="col-span-3" />
              </div>
            </div>
          </div>
          <FontTm1TitleWedding class="text-center mb-10"
            >Kpd. Bpk/Ibu/Saudara/i</FontTm1TitleWedding
          >
          <FontTm1WeddingDate class="uppercase text-center">{{
            $route.query.to == undefined || $route.query.to == ""
              ? "No Name"
              : $route.query.to
          }}</FontTm1WeddingDate>
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
      <div class="flex justify-center">
        <button
          @click="open()"
          class="bg-white_thm_1 hover:bg-gray-200 text-black_thm_1 py-2 px-4 rounded-xl inline-flex items-center shadow"
        >
          <FontTm1Desc>Buka Undangan</FontTm1Desc>
        </button>
      </div>
    </div>
    <audio ref="music" loop>
      <source src="/Sampai Menutup Mata.mp3" type="audio/ogg" />
    </audio>
    <div
      class="player rounded-full bg-white cursor-pointer hover:bg-gray-300"
      :class="{ 'bg-gray-300': !isPlayingSong }"
      @click="toggleMusic()"
    >
      <img src="~/assets/images/invitation/thm1/vinyl-icon.svg" alt="" />
    </div>
    <div class="music-note" :class="{ invisible: !isPlayingSong }">
      <div class="noot-1">&#9835; &#9833;</div>
      <div class="noot-2">&#9833;</div>
      <div class="noot-3">&#9839; &#9834;</div>
      <div class="noot-4">&#9834;</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isPlayingSong: false,
    isOpen: false,
  }),
  mounted() {
    this.$refs.music.volume = 0.1;
  },
  methods: {
    toggleMusic() {
      if (
        this.$refs.music.paused &&
        this.$refs.music.currentTime > 0 &&
        !this.$refs.music.ended
      ) {
        this.$refs.music.play();
        this.isPlayingSong = true;
      } else {
        this.$refs.music.pause();
        this.isPlayingSong = false;
      }
    },
    open() {
      this.isOpen = true;
      this.$refs.music.play();
      this.isPlayingSong = true;
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
    },
  },
  updated() {},
};
</script>

<style lang="scss" scoped>
.cover {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: white;
  position: fixed;
  z-index: 99999;
  overflow: hidden;
  &.active {
    transition: 0.5s ease-in-out;
    top: -100%;
  }

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
      padding: 50px 0;
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
  }
}
.music-player-box {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  .player {
    width: 50px;
    height: 50px;
  }
}
.music-note {
  display: block;
  margin: auto;
  position: absolute;
  top: 0;
  transform: translateY(-100px);
  left: 0;
  width: 50px;
  min-width: 50px;
  height: 50px;
  border: 0px solid #000;
}

.noot-1,
.noot-2,
.noot-3,
.noot-4 {
  position: absolute;
  animation: notes 2s infinite linear;
  font-size: 12px;
  opacity: 0;
}

.noot-1 {
  top: 60px;
  left: 0;
  animation-delay: 0.5s;
}

.noot-2 {
  top: 30px;
  left: 30%;
  animation-delay: 1s;
}

.noot-3 {
  top: 90px;
  left: 60%;
  animation-delay: 1.5s;
}

.noot-4 {
  top: 40px;
  left: 90%;
  animation-delay: 2s;
}

@keyframes notes {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.5) translate(50%, -50%);
  }
  80% {
    opacity: 0;
    transform: scale(1.5) translate(100%, -100%);
  }
  100% {
    transform: scale(1.5) translate(100%, -100%);
    opacity: 0;
  }
}
</style>
