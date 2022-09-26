<template>
  <div class="flex flex-col mx-auto w-full min-h-screen bg-gray-200 relative">
    <!-- ========== HEADER ========== -->
    <header
      class="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4"
    >
      <slot name="nav"> Default nav content </slot>
    </header>
    <div class="max-w-[70rem] mx-auto mb-auto w-full">
      <slot> Default main content </slot>
    </div>
    <footer class="flex justify-center pb-4 sm:mt-0">
      <a
        href="mailto:me@qasimnouh.com"
        target="_blank"
        class="text-sm text-gray-700 hover:text-gray-900 mt-4"
        >me@qasimnouh.com</a
      >
    </footer>
  </div>
</template>
<script setup>
useHead({
  title: "Qasim Nouh",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Qasim Nouh personel website" }],
  link: [
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  script: [
    {
      defer: true,
      src: "https://analytics.qasimnouh.com/js/plausible.js",
      "data-domain": "qasimnouh.com",
    },
  ],
  bodyAttrs: {
    class: "h-full font-[Helvetica]",
  },
});
</script>
