<template>
  <footer class="border-t border-white/[0.06]">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
      <div class="flex items-center gap-3">
        <img src="/favicon-32x32.png" alt="" width="20" height="20" class="h-5 w-5 rounded" />
        <span>© {{ year }} {{ profile.name }}</span>
      </div>
      <div class="flex items-center gap-5">
        <a :href="`mailto:${profile.email}`" class="transition hover:text-white" aria-label="Email">
          <AppIcon name="mail" class="h-5 w-5" />
        </a>
        <a :href="profile.linkedin" target="_blank" rel="noopener" class="transition hover:text-white" aria-label="LinkedIn">
          <AppIcon name="linkedin" class="h-5 w-5" />
        </a>
        <a href="#top" class="font-mono text-xs uppercase tracking-widest transition hover:text-accent">Back to top ↑</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { profile } from '~/data/cv'

const year = new Date().getFullYear()
</script>
