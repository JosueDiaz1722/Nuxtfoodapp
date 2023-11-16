// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['~/assets/main.scss'],
  pinia: {
    storesDirs: ['./store/**'],
  },
  plugins: [
    '~/plugins/getfood.server.js'
  ]
});
