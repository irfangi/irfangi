// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: [{ path: "~/components", extensions: [".vue"] }],
  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxtjs/tailwindcss"],
  css: ["@/assets/css/font.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "postcss-custom-properties": false,
    },
  },
});
