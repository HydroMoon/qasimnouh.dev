<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'"
  >
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
      <a href="#top" class="group flex items-center gap-3" @click="open = false">
        <img
          src="/android-chrome-192x192.png"
          alt=""
          width="36"
          height="36"
          class="h-9 w-9 rounded-lg ring-1 ring-white/10 transition group-hover:ring-accent/50"
        />
        <span class="font-display text-base font-semibold tracking-tight text-white">Gasim Nouh</span>
      </a>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="relative rounded-full px-4 py-2 text-sm transition"
            :class="current === link.id ? 'text-white' : 'text-slate-400 hover:text-white'"
          >
            <span
              v-if="current === link.id"
              class="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10"
            />
            {{ link.label }}
          </a>
        </li>
      </ul>

      <a :href="`mailto:${profile.email}`" class="btn-primary hidden !px-5 !py-2 md:inline-flex">Get in touch</a>

      <button
        type="button"
        class="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
        :aria-expanded="open"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation"
        @click="open = !open"
      >
        <AppIcon :name="open ? 'close' : 'menu'" class="h-5 w-5" />
      </button>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" id="mobile-menu" class="border-t border-white/[0.06] px-4 pb-6 pt-2 md:hidden">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="block border-b border-white/[0.05] py-3 font-display text-lg text-slate-300 hover:text-white"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <a :href="`mailto:${profile.email}`" class="btn-primary mt-6 w-full" @click="open = false">Get in touch</a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { profile } from '~/data/cv'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'solutions', label: 'What I build' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'infrastructure', label: 'Homelab' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

const open = ref(false)
const scrolled = ref(false)
const current = ref('')

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  // Highlight the section that is crossing the middle of the viewport.
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) current.value = entry.target.id
      }
    },
    { rootMargin: '-50% 0px -50% 0px' },
  )
  for (const link of links) {
    const section = document.getElementById(link.id)
    if (section) observer.observe(section)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  observer?.disconnect()
})
</script>
