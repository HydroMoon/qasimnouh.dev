<template>
  <section id="solutions" class="section">
    <div class="max-w-2xl">
      <span v-reveal class="eyebrow">03 · What I build</span>
      <h2 v-reveal="80" class="heading">Systems I’ve shipped to production.</h2>
      <p v-reveal="140" class="mt-5 text-lg text-slate-400">
        Ten platforms delivered for government and enterprise clients, built on Laravel and Vue.js. These are the kinds of systems I design and deliver.
      </p>
    </div>

    <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="(item, i) in solutions"
        :key="item.title"
        v-reveal="(i % 4) * 70"
        class="card card-hover group flex flex-col overflow-hidden p-6"
        :class="[
          item.featured && 'sm:col-span-2 lg:row-span-2 sm:p-8',
          i === solutions.length - 1 && 'lg:col-span-2',
        ]"
        @pointermove="onMove"
      >
        <div
          class="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style="background: radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(52, 211, 153, 0.12), transparent 70%)"
        />
        <span
          class="relative grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent transition group-hover:border-accent/40 group-hover:bg-accent/10"
        >
          <AppIcon :name="item.icon" class="h-5 w-5" />
        </span>
        <h3 class="relative mt-5 font-display font-medium text-white" :class="item.featured ? 'text-2xl' : 'text-lg'">
          {{ item.title }}
        </h3>
        <p class="relative mt-2 text-sm leading-relaxed text-slate-400" :class="item.featured && 'sm:text-base'">
          {{ item.text }}
        </p>

        <!-- Live request/response demo on the featured card -->
        <div
          v-if="item.featured"
          class="relative mt-6 overflow-hidden rounded-xl border border-white/[0.07] bg-ink-950/80 font-mono text-[12px] leading-relaxed"
          aria-hidden="true"
        >
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300"
            enter-from-class="opacity-0 translate-y-1"
            leave-active-class="transition duration-200"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div :key="active">
              <div class="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
                <span class="truncate">
                  <span class="font-semibold" :class="call.method === 'GET' ? 'text-sky-300' : 'text-amber-200'">{{ call.method }}</span>
                  <span class="ml-2 text-slate-300">{{ call.path }}</span>
                </span>
                <span class="ml-3 shrink-0 rounded bg-accent/10 px-1.5 py-0.5 text-[10px] text-accent">{{ call.status }} · {{ call.ms }}ms</span>
              </div>
              <pre class="overflow-hidden whitespace-pre px-4 py-3 text-slate-400" v-html="call.body" />
            </div>
          </Transition>
        </div>

        <ul v-if="item.featured" class="relative mt-auto grid grid-cols-2 gap-3 pt-6">
          <li
            v-for="tag in item.tags"
            :key="tag"
            class="flex items-center gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-sm text-slate-300"
          >
            <AppIcon name="check" class="h-4 w-4 shrink-0 text-accent" />
            {{ tag }}
          </li>
        </ul>
        <div v-else class="relative mt-auto flex flex-wrap gap-2 pt-5">
          <span v-for="tag in item.tags" :key="tag" class="chip !text-[11px]">{{ tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { solutions } from '~/data/cv'

const k = (s: string) => `<span class="text-accent-soft">"${s}"</span>`
const v = (s: string | number) =>
  typeof s === 'number' ? `<span class="text-amber-200">${s}</span>` : `<span class="text-sky-200">"${s}"</span>`

const calls = [
  {
    method: 'GET',
    path: '/api/v1/bookings/availability',
    status: 200,
    ms: 38,
    body: `{\n  ${k('date')}: ${v('2026-10-14')},\n  ${k('slots')}: [\n    { ${k('time')}: ${v('09:00')}, ${k('remaining')}: ${v(4)} },\n    { ${k('time')}: ${v('10:30')}, ${k('remaining')}: ${v(1)} }\n  ]\n}`,
  },
  {
    method: 'POST',
    path: '/api/v1/payments/webhook',
    status: 200,
    ms: 21,
    body: `{\n  ${k('event')}: ${v('payment.captured')},\n  ${k('reference')}: ${v('BK-20931')},\n  ${k('status')}: ${v('paid')},\n  ${k('synced')}: <span class="text-amber-200">true</span>\n}`,
  },
  {
    method: 'GET',
    path: '/api/v1/applications/4821',
    status: 200,
    ms: 44,
    body: `{\n  ${k('stage')}: ${v('review')},\n  ${k('approvals')}: ${v(2)},\n  ${k('next')}: ${v('final-decision')},\n  ${k('updated_at')}: ${v('2026-10-01T09:12:00Z')}\n}`,
  },
]

const active = ref(0)
const call = computed(() => calls[active.value]!)
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(() => (active.value = (active.value + 1) % calls.length), 3500)
})

onBeforeUnmount(() => clearInterval(timer))

// Track the pointer inside each card for the hover glow.
const onMove = (e: PointerEvent) => {
  const card = e.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  card.style.setProperty('--my', `${e.clientY - rect.top}px`)
}
</script>
