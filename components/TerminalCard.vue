<template>
  <div class="relative">
    <div class="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-transparent to-accent-cyan/30 opacity-60 blur-sm" />
    <div class="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-2xl shadow-black/50">
      <div class="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <span class="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span class="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span class="h-3 w-3 rounded-full bg-[#28c840]" />
        <span class="ml-3 font-mono text-xs text-slate-500">gasim@doha: ~/platform</span>
      </div>
      <div class="h-[20rem] overflow-hidden p-4 font-mono text-[11.5px] leading-relaxed sm:h-[22rem] sm:p-5 sm:text-[13px]">
        <div v-for="(line, i) in shown" :key="i" class="whitespace-pre-wrap break-words">
          <template v-if="line.kind === 'cmd'">
            <span class="text-accent">❯</span> <span class="text-white">{{ line.text }}</span>
          </template>
          <span v-else :class="line.tone ?? 'text-slate-400'">{{ line.text }}</span>
        </div>
        <div v-if="typing !== null">
          <span class="text-accent">❯</span> <span class="text-white">{{ typing }}</span><span class="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Line = { kind: 'cmd' | 'out'; text: string; tone?: string }

const script: Line[] = [
  { kind: 'cmd', text: 'docker compose build app' },
  { kind: 'out', text: '✔ Build finished  (−70% build time)', tone: 'text-emerald-300' },
  { kind: 'cmd', text: 'php artisan queue:work redis --tries=3' },
  { kind: 'out', text: '12:04:31 RUNNING  App\\Jobs\\SyncPayment' },
  { kind: 'out', text: '12:04:31 DONE     App\\Jobs\\SyncPayment  ✔', tone: 'text-emerald-300' },
  { kind: 'cmd', text: 'tofu apply -auto-approve' },
  { kind: 'out', text: 'Apply complete! Resources: 6 added, 0 changed.', tone: 'text-emerald-300' },
  { kind: 'cmd', text: 'kubectl get nodes' },
  { kind: 'out', text: 'k8s-node-1   Ready   control-plane\nk8s-node-2   Ready   worker\nk8s-node-3   Ready   worker', tone: 'text-cyan-300' },
  { kind: 'cmd', text: 'curl -s localhost/health | jq .status' },
  { kind: 'out', text: '"ok"', tone: 'text-amber-200' },
]

// Show the whole session on the server; animate it line by line on the client.
const shown = ref<Line[]>([...script])
const typing = ref<string | null>(null)
let timer: ReturnType<typeof setTimeout> | undefined
let alive = true

const wait = (ms: number) => new Promise<void>((resolve) => (timer = setTimeout(resolve, ms)))

const play = async () => {
  while (alive) {
    shown.value = []
    for (const line of script) {
      if (!alive) return
      if (line.kind === 'cmd') {
        typing.value = ''
        for (const ch of line.text) {
          await wait(28 + Math.random() * 40)
          typing.value += ch
        }
        await wait(350)
        typing.value = null
        shown.value.push(line)
      } else {
        await wait(260)
        shown.value.push(line)
      }
    }
    typing.value = ''
    await wait(4000)
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  play()
})

onBeforeUnmount(() => {
  alive = false
  clearTimeout(timer)
})
</script>
