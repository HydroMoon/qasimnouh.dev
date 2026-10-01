<template>
  <section id="infrastructure" class="section">
    <div class="grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
      <div>
        <span v-reveal class="eyebrow">04 · Homelab</span>
        <h2 v-reveal="80" class="heading">I run my own infrastructure.</h2>
        <p v-reveal="140" class="mt-5 text-lg leading-relaxed text-slate-400">
          Outside work I run a small production-style lab where I try out virtualization, orchestration and
          network security before using them on real projects.
        </p>
        <ul class="mt-8 space-y-4">
          <li v-for="(item, i) in homelab" :key="item.title" v-reveal="180 + i * 70" class="flex gap-4">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
              <AppIcon :name="item.icon" class="h-5 w-5" />
            </span>
            <div>
              <p class="font-medium text-white">{{ item.title }}</p>
              <p class="text-sm text-slate-400">{{ item.detail }}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Network topology -->
      <div v-reveal="160" class="card overflow-hidden p-5 sm:p-8" role="img" aria-label="Homelab network: remote clients connect over WireGuard to a pfSense firewall, which splits traffic into management, server and guest VLANs. The server VLAN hosts three Proxmox nodes and three Kubernetes nodes.">
        <div class="flex flex-col items-center font-mono text-xs">
          <div class="node"><AppIcon name="globe" class="h-4 w-4 text-slate-400" /> Remote client</div>
          <div class="link"><span class="packet" /></div>
          <div class="node node-accent"><AppIcon name="key" class="h-4 w-4" /> WireGuard tunnel</div>
          <div class="link"><span class="packet" style="animation-delay: 0.6s" /></div>
          <div class="node node-accent"><AppIcon name="shield" class="h-4 w-4" /> pfSense firewall</div>

          <div class="relative mt-0 w-full">
            <div class="mx-auto h-6 w-px bg-white/15" />
            <div class="mx-auto h-px w-2/3 bg-white/15" />
            <div class="grid grid-cols-3">
              <div v-for="(vlan, i) in vlans" :key="vlan.name" class="flex flex-col items-center">
                <div class="relative h-6 w-px overflow-hidden bg-white/15">
                  <span class="packet" :style="{ animationDelay: `${1.2 + i * 0.3}s` }" />
                </div>
                <div class="rounded-md border px-2 py-1.5 text-center sm:px-3" :class="vlan.tone">
                  <span class="block text-[10px] uppercase tracking-wider opacity-70">VLAN {{ vlan.id }}</span>
                  {{ vlan.name }}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 grid w-full grid-cols-2 gap-3">
            <div class="rounded-xl border border-white/10 bg-ink-950/60 p-3 sm:p-4">
              <p class="mb-3 flex items-center gap-2 text-slate-300"><AppIcon name="server" class="h-4 w-4 text-accent" /> Proxmox</p>
              <div class="space-y-1.5">
                <div v-for="n in 3" :key="n" class="flex items-center justify-between rounded bg-white/[0.04] px-2 py-1.5 text-[11px] text-slate-400">
                  pve-{{ n }} <span class="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" :style="{ animationDelay: `${n * 0.4}s` }" />
                </div>
              </div>
            </div>
            <div class="rounded-xl border border-white/10 bg-ink-950/60 p-3 sm:p-4">
              <p class="mb-3 flex items-center gap-2 text-slate-300"><AppIcon name="cube" class="h-4 w-4 text-accent-cyan" /> Kubernetes</p>
              <div class="space-y-1.5">
                <div v-for="n in 3" :key="n" class="flex items-center justify-between rounded bg-white/[0.04] px-2 py-1.5 text-[11px] text-slate-400">
                  k8s-{{ n }} <span class="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" :style="{ animationDelay: `${n * 0.5}s` }" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { homelab } from '~/data/cv'

const vlans = [
  { id: 10, name: 'Mgmt', tone: 'border-amber-300/30 bg-amber-300/[0.06] text-amber-200' },
  { id: 20, name: 'Servers', tone: 'border-accent/40 bg-accent/[0.08] text-accent-soft' },
  { id: 30, name: 'Guest', tone: 'border-sky-300/30 bg-sky-300/[0.06] text-sky-200' },
]
</script>

<style scoped>
.node {
  @apply flex items-center gap-2 rounded-lg border border-white/10 bg-ink-950/70 px-4 py-2.5 text-slate-300;
}
.node-accent {
  @apply border-accent/30 text-accent-soft shadow-[0_0_30px_-12px_rgba(52,211,153,0.6)];
}
.link {
  @apply relative h-8 w-px overflow-hidden bg-white/15;
}
.packet {
  @apply absolute left-0 top-0 h-3 w-px bg-accent shadow-[0_0_8px_2px_rgba(52,211,153,0.7)];
  animation: packet 2.4s linear infinite;
}
@keyframes packet {
  0% { transform: translateY(-100%); opacity: 0; }
  15% { opacity: 1; }
  85% { opacity: 1; }
  100% { transform: translateY(300%); opacity: 0; }
}
</style>
