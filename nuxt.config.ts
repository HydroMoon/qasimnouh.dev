// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '',
  },
  typescript: {
    strict: true,
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', 'nuxt-headlessui'],
})
