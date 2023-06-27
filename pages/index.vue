<template>
  <main id="content" role="main">
    <div class="flex justify-center sm:justify-start mx-8 sm:p-0 sm:mx-0 mb-4">
      <div
        class="flex items-center text-center lg:text-left sm:text-left px-8 md:px-12 lg:w-1/2"
      >
        <div>
          <h1
            class="text-5xl sm:text-7xl font-sans font-semibold text-gray-800 md:text-7xl"
          >
            Qasim Nouh.
          </h1>
          <p class="mt-2 text-sm text-gray-500 md:text-base prose">
            Welcome to my humble website, I am really enthusiastic about
            technology in all ways. I choose Software Engineering by heart,
            mainly developing using PHP (Laravel framework), VueJS and
            TailwindCSS for the front-end side. Recently I got sucked into the
            world of DevOps specifically Docker and CI/CD pipelines. As they
            said you do not know how deep the rabbit hole goes until you fell on
            it :P
          </p>
          <p class="mt-2 text-sm text-gray-400 md:text-base">
            Github Zen: {{ github_zen }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center sm:justify-start mx-8 sm:p-0 sm:mx-0 mb-4">
      <div
        v-for="(item, index) in stack"
        :key="index"
        class="text-center p-4 sm:p-6 lg:p-8 aspect-square transition hover:scale-105 hidden"
      >
        <div class="flex flex-col justify-center align-middle">
          <img
            :src="`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item}`"
          />

          <span class="font-semibold text-sm text-gray-700">{{ index }}</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
const stack = ref({
  PHP: 'php/php-original.svg',
  VueJS: 'vuejs/vuejs-original.svg',
  TailWindCSS: 'tailwindcss/tailwindcss-plain.svg',
});

const { data: github_zen } = await useFetch('https://api.github.com/zen');
</script>
