<template>
  <section id="skills" class="relative py-20 md:py-28">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <span v-reveal class="eyebrow">06 · Skills</span>
      <h2 v-reveal="80" class="heading">The toolbox.</h2>
    </div>

    <!-- Infinite marquee -->
    <div
      class="group relative mt-12 flex overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      aria-hidden="true"
    >
      <div class="flex w-max shrink-0 animate-marquee gap-10 pr-10 group-hover:[animation-play-state:paused]">
        <span
          v-for="(item, i) in [...marquee, ...marquee]"
          :key="i"
          class="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-medium text-slate-500 transition hover:text-white sm:text-3xl"
        >
          {{ item }}
          <span class="text-accent/50">✦</span>
        </span>
      </div>
    </div>

    <div class="mx-auto mt-14 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
      <div
        v-for="(group, i) in skillGroups"
        :key="group.title"
        v-reveal="(i % 3) * 80"
        class="card card-hover p-6"
      >
        <p class="font-mono text-xs uppercase tracking-widest text-slate-500">{{ group.title }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { marquee, skillGroups } from '~/data/cv'
</script>
