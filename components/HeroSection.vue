<template>
  <section id="top" class="relative mx-auto flex min-h-[100svh] w-full max-w-6xl items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
    <div class="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div>
        <div v-reveal class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <AppIcon name="pin" class="h-3.5 w-3.5 text-slate-400" />
          {{ profile.location }}
        </div>

        <h1 v-reveal="80" class="mt-6 whitespace-nowrap font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-white min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
          Gasim <span class="text-gradient">Nouh.</span>
        </h1>

        <p v-reveal="160" class="mt-6 font-mono text-sm text-slate-400 sm:text-base">
          <span class="text-accent">~/</span>{{ profile.role }}
        </p>

        <p v-reveal="240" class="mt-6 min-h-[2.5em] font-display text-2xl font-medium leading-tight text-white sm:min-h-0 sm:text-3xl">
          I build
          <span class="text-gradient">{{ typed }}</span><span class="ml-1 inline-block w-[3px] animate-blink bg-accent align-[-0.15em]" style="height: 1em" />
        </p>
        <p v-reveal="280" class="mt-4 max-w-xl text-lg leading-relaxed text-slate-400">
          Fast backends, automated pipelines and well-run infrastructure for platforms that can’t afford to go down.
        </p>

        <div v-reveal="320" class="mt-10 flex flex-wrap gap-3">
          <a href="#experience" class="btn-primary group">
            See my work
            <AppIcon name="arrow" class="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a :href="`mailto:${profile.email}`" class="btn-ghost">
            <AppIcon name="mail" class="h-4 w-4" />
            Contact me
          </a>
        </div>
      </div>

      <div v-reveal="200">
        <TerminalCard />
      </div>
    </div>

    <a
      href="#about"
      class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500 transition hover:text-accent md:flex"
    >
      Scroll
      <span class="relative h-10 w-px overflow-hidden bg-white/10">
        <span class="absolute inset-x-0 top-0 h-1/2 animate-[scrollLine_2s_ease-in-out_infinite] bg-accent" />
      </span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { profile } from '~/data/cv'

const phrases = [
  'scalable Laravel platforms.',
  'RESTful APIs.',
  'CI/CD pipelines.',
  'secure payment flows.',
  'resilient infrastructure.',
]

// Server-render the first phrase in full; the typing loop takes over on the client.
const typed = ref(phrases[0])
let timer: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  let phrase = 0
  let chars = phrases[0].length
  let deleting = true

  const step = () => {
    const word = phrases[phrase]
    chars += deleting ? -1 : 1
    typed.value = word.slice(0, chars)

    let delay = deleting ? 35 : 70
    if (!deleting && chars === word.length) {
      deleting = true
      delay = 2200
    } else if (deleting && chars === 0) {
      deleting = false
      phrase = (phrase + 1) % phrases.length
      delay = 300
    }
    timer = setTimeout(step, delay)
  }
  timer = setTimeout(step, 2400)
})

onBeforeUnmount(() => clearTimeout(timer))
</script>

<style scoped>
@keyframes scrollLine {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}
</style>
