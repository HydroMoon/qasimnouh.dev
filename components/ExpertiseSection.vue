<template>
  <section id="expertise" class="section">
    <div class="max-w-2xl">
      <span v-reveal class="eyebrow">03 · Expertise</span>
      <h2 v-reveal="80" class="heading">What I bring to a team.</h2>
      <p v-reveal="140" class="mt-5 text-lg text-slate-400">
        Full-cycle engineering, from data model and API design to the pipeline that ships it and the servers that run it.
      </p>
    </div>

    <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="(item, i) in specialties"
        :key="item.title"
        v-reveal="(i % 4) * 80"
        class="card card-hover group overflow-hidden p-6"
        @pointermove="onMove"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style="background: radial-gradient(240px circle at var(--mx, 50%) var(--my, 50%), rgba(52, 211, 153, 0.12), transparent 70%)"
        />
        <span class="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent transition group-hover:border-accent/40 group-hover:bg-accent/10">
          <AppIcon :name="item.icon" class="h-5 w-5" />
        </span>
        <h3 class="relative mt-5 font-display text-lg font-medium text-white">{{ item.title }}</h3>
        <p class="relative mt-2 text-sm leading-relaxed text-slate-400">{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { specialties } from '~/data/cv'

// Track the pointer inside each card for the hover glow.
const onMove = (e: PointerEvent) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}
</script>
