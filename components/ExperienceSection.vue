<template>
  <section id="experience" class="section">
    <span v-reveal class="eyebrow">02 · Experience</span>
    <h2 v-reveal="80" class="heading">Where I’ve been building.</h2>

    <ol class="relative mt-16 space-y-12 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gradient-to-b before:from-accent/60 before:via-white/10 before:to-transparent md:before:left-[calc(16rem+7px)]">
      <li
        v-for="job in experience"
        :key="job.company"
        class="relative grid gap-4 pl-10 md:grid-cols-[16rem_1fr] md:gap-0 md:pl-0"
      >
        <div v-reveal class="md:pr-10 md:pt-1 md:text-right">
          <p class="font-mono text-xs uppercase tracking-widest text-accent">{{ job.period }}</p>
          <p class="mt-1 text-sm text-slate-500">{{ job.location }}</p>
        </div>

        <span
          class="absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border border-accent/60 bg-ink-950 md:left-[16rem]"
        >
          <span class="h-[7px] w-[7px] rounded-full" :class="job.current ? 'bg-accent animate-pulse' : 'bg-slate-600'" />
        </span>

        <div v-reveal="100" class="card card-hover p-6 md:ml-10 sm:p-8">
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <h3 class="font-display text-xl font-semibold text-white sm:text-2xl">{{ job.role }}</h3>
            <span v-if="job.current" class="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] text-accent">Current</span>
          </div>
          <p class="mt-1 font-medium text-accent-soft">{{ job.company }}</p>
          <p class="mt-4 text-slate-400">{{ job.summary }}</p>

          <ul class="mt-6 space-y-3">
            <li v-for="item in job.highlights" :key="item.text" class="flex gap-4">
              <span
                v-if="item.metric"
                class="mt-0.5 w-14 shrink-0 font-display text-lg font-semibold leading-6 text-white"
              >
                {{ item.metric }}
              </span>
              <span v-else class="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
              <span class="text-[15px] leading-6 text-slate-300">{{ item.text }}</span>
            </li>
          </ul>

          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tag in job.tags" :key="tag" class="chip">{{ tag }}</span>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup lang="ts">
import { experience } from '~/data/cv'
</script>
