<template>
  <main class="mb-auto" id="content" role="main">
    <div
      class="flex justify-center sm:justify-start mx-8 sm:p-0 sm:bg-gray-200 sm:mx-0 mb-4 shadow-inner rounded-md"
      style="height: 300px"
    >
      <div
        class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
      >
        <div>
          <img
            class="rounded-full object-cover mx-auto sm:mx-0 h-32 mb-2 shadow-md"
            :src="github_profile.avatar_url"
            alt="Qasim Profile"
          />
          <h2
            class="text-3xl font-semibold text-gray-200 sm:text-gray-800 md:text-4xl"
          >
            Qasim Nouh
          </h2>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            Backend Developer...
          </p>
          <p class="mt-2 text-sm text-gray-400 md:text-base">
            Github Zen: {{ github_zen }}
          </p>
        </div>
      </div>
      <div
        class="hidden lg:block lg:w-1/2"
        style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
      >
        <div
          class="h-full object-cover rounded-md"
          style="
            background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
          "
        >
          <div class="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
    <div class="grid px-8 sm:p-0 sm:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in stack"
        :key="index"
        class="text-center p-4 sm:p-6 lg:p-8 aspect-square bg-gray-200 shadow-inner rounded-md transition hover:scale-105"
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
  PHP: "php/php-original.svg",
  VueJS: "vuejs/vuejs-original.svg",
  TailWindCSS: "tailwindcss/tailwindcss-plain.svg",
});

const { data: github_zen } = await useFetch("https://api.github.com/zen");
const { data: github_profile } = await useFetch(
  "https://api.github.com/users/HydroMoon"
);
</script>
