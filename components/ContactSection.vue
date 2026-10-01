<template>
  <section id="contact" class="section">
    <div v-reveal class="card relative overflow-hidden px-6 py-16 text-center sm:px-12 md:py-24">
      <div class="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div class="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />

      <span class="eyebrow relative justify-center">07 · Contact</span>
      <h2 class="heading relative mx-auto max-w-3xl">
        Have a platform to build or a pipeline to <span class="text-gradient">speed up?</span>
      </h2>
      <p class="relative mx-auto mt-5 max-w-xl text-lg text-slate-400">
        I’m happy to talk about backend architecture, DevOps, or a new opportunity. Email is the fastest way to reach me.
      </p>

      <div class="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a :href="`mailto:${profile.email}`" class="btn-primary group">
          <AppIcon name="mail" class="h-4 w-4" />
          {{ profile.email }}
        </a>
        <button type="button" class="btn-ghost" @click="copyEmail">
          <AppIcon :name="copied ? 'check' : 'copy'" class="h-4 w-4" :class="copied && 'text-accent'" />
          {{ copied ? 'Copied!' : 'Copy email' }}
        </button>
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="btn-ghost group">
          <AppIcon name="linkedin" class="h-4 w-4" />
          LinkedIn
          <AppIcon name="arrowUp" class="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/cv'

const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    clearTimeout(timer)
    timer = setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>
