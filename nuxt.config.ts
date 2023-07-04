// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: "~/components", extensions: [".vue"] }],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/font.css"],
  tailwindcss:{
    darkMode:false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-custom-properties": false,
    },
  },
});
