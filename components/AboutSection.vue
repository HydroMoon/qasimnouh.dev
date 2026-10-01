<template>
  <section id="about" class="section">
    <div class="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
      <div>
        <span v-reveal class="eyebrow">01 · About</span>
        <h2 v-reveal="80" class="heading">
          Where software engineering<br class="hidden sm:block" />
          meets <span class="text-gradient">operations.</span>
        </h2>
      </div>
      <div class="space-y-6 text-lg leading-relaxed text-slate-300">
        <p v-reveal="120">{{ profile.summary }}</p>
        <p v-reveal="180" class="text-slate-400">
          Today I lead Laravel delivery at Applab in Doha, where my team builds platforms for government
          ministries, national institutions and major enterprises in Qatar. I care about clean architecture,
          measurable performance gains, and pipelines that make shipping uneventful.
        </p>
        <div v-reveal="240" class="card flex items-start gap-4 p-5">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
            <AppIcon name="cap" class="h-6 w-6" />
          </span>
          <div>
            <p class="font-display font-medium text-white">{{ education.degree }}</p>
            <p class="text-sm text-slate-400">{{ education.school }} · {{ education.location }} · {{ education.year }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        v-reveal="i * 90"
        class="group bg-ink-950/90 p-6 transition hover:bg-ink-900 sm:p-8"
      >
        <p class="font-display text-4xl font-semibold text-white transition group-hover:text-accent sm:text-5xl">
          <CountUp :to="stat.value" :suffix="stat.suffix" />
        </p>
        <p class="mt-2 text-sm text-slate-400">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { education, profile, stats } from '~/data/cv'
</script>
