// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  typescript: {
    strict: true,
  },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Gasim Nouh · Backend Developer & Laravel Technical Lead',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Gasim Nouh is a backend developer and Laravel technical lead in Doha, Qatar, building scalable web platforms with Laravel, Vue.js, Docker and modern DevOps.',
        },
        { name: 'theme-color', content: '#07090d' },
        { property: 'og:title', content: 'Gasim Nouh · Backend Developer & Laravel Technical Lead' },
        {
          property: 'og:description',
          content: 'Backend engineering, DevOps and infrastructure. Based in Doha, Qatar.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://qasimnouh.com' },
        { property: 'og:image', content: 'https://qasimnouh.com/android-chrome-512x512.png' },
      ],
      script: [
        // Hide reveal-on-scroll content before first paint; if JS never runs, it stays visible.
        { innerHTML: "document.documentElement.classList.add('js')", tagPosition: 'head' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
        },
      ],
    },
  },
})
