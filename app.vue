<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="black" :height="2" />
    <template #nav>
      <nav
        class="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex items-center justify-between">
          <NuxtLink
            class="flex items-center space-x-2 font-medium text-xl"
            to="/"
          >
            <img class="h-10" src="/android-chrome-512x512.png" alt="Icon" />
            <span class="text-gray-700 hover:text-gray-900">Home</span>
          </NuxtLink>
          <div class="sm:hidden">
            <button
              type="button"
              class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 hover:border-gray-600 font-medium text-gray-700 hover:text-gray-900 shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                class="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                class="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div
            class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 font-medium text-xl text-gray-700"
          >
            <a
              class="hover:text-gray-900"
              href="https://github.com/HydroMoon"
              target="_blank"
              aria-current="page"
              >● GITHUB</a
            >
            <NuxtLink class="hover:text-gray-900" to="/blog">● BLOG</NuxtLink>
            <!-- <NuxtLink class="hover:text-gray-900" to="/about">● ABOUT</NuxtLink> -->
          </div>
        </div>
      </nav>
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>
