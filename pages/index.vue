<template>
  <!-- <section class="hero">
    <div class="grid grid-cols-2 py-20">
      <div class="flex justify-center flex-col">
        <h4 class="name">Hi I'm Irfangi 👋</h4>
        <h1>Frontend Developer <br />& Frelancer</h1>
        <p class="tagline">Bringing ideas to life with code and design</p>
      </div>
      <div class="flex justify-center items-center">
        <img src="./../assets/images/me.png" alt="My Avatar" />
      </div>
    </div>
  </section>
  <section class="about">
    <div class="grid grid-cols-6">
      <div class="terminal col-span-4">
        <div class="terminal__body">
          <h4>About Me</h4>
          <p>
            <span>#</span> Experienced frontend web developer with a passion for
            creating dynamic, user-friendly websites and applications. Skilled
            in HTML, CSS, JavaScript, and other frontend technologies. Committed
            to delivering responsive designs and exceptional user experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="ornamen--yellow"></div>
  <div class="ornamen--purple"></div>
  <div class="ornamen--blue"></div> -->
  <div class="container mx-auto coming-soon">
    <h1>Coming Soon</h1>
    <p>Crafting extraordinary experiences. Stay tuned for my portfolio!</p>
  </div>
</template>

<script>
definePageMeta({
  layout: "blank",
});
export default {
  data() {
    return {
      zoom: 2,
    };
  },
};
</script>

<style lang="scss" scoped>
.coming-soon{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1{
    font-size: 60px;
  }
}
.ornamen--yellow {
  width: 200px;
  height: 200px;
  background: yellow;
  filter: blur(100px);
  top: -50px;
  @apply rounded-full absolute;
}
.ornamen--purple {
  width: 300px;
  height: 300px;
  background: purple;
  filter: blur(100px);
  top: 300px;
  right: 0;
  @apply rounded-full absolute;
}
.ornamen--blue {
  width: 250px;
  height: 250px;
  background: blue;
  filter: blur(100px);
  top: 550px;
  @apply rounded-full absolute;
}
.terminal {
  padding: 5px;
  background: linear-gradient(270.06deg, #c62bdf 0.06%, #dfb62b 99.97%);
  @apply rounded-md;
}
.terminal__body {
  @apply bg-gray-100 w-full rounded-sm p-4;
}
</style>
<style lang="scss" scoped>
section {
  z-index: 1;
  position: relative;
  &.hero {
    .name {
      font-family: "JetBrains Mono", monospace;
      font-size: 26px;
    }
    h1 {
      font-family: "Open Sans", sans-serif;
      font-size: 42px;
      line-height: 50px;
      background: linear-gradient(270.06deg, #c62bdf 0.06%, #dfb62b 99.97%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .tagline {
      font-family: "JetBrains Mono", monospace;
      font-size: 16px;
    }
  }
  &.about {
    font-family: "JetBrains Mono", monospace;
    h4 {
      font-size: 24px;
      line-height: 24px;
    }
    p {
      span {
        display: inline-block;
        color: green;
        font-size: 20px;
        font-weight: 700;
      }
      font-size: 16px;
    }
  }
}
</style>
