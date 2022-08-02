<template>
  <div class="max-w-[50rem] flex flex-col mx-auto w-full min-h-screen">
    <!-- ========== HEADER ========== -->
    <header
      class="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4"
    >
      <slot name="nav"> Default nave content </slot>
    </header>
    <slot />
    <footer class="flex justify-center pb-4 mt-4 sm:mt-0">
      <span class="text-sm text-gray-200">Made with <span class="text-red-700">♥</span> by Qasim</span>
    </footer>
  </div>
</template>
<script setup>
useHead({
  title: "Qasim Nouh",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "Qasim Nouh personel website" }],
  link: [{ rel: "shorcut icon", href: "/favicon.ico" }],
  bodyAttrs: {
    class: "bg-slate-900 h-full font-[Helvetica]",
  },
});
</script>
