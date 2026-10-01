<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path v-for="(d, i) in paths" :key="i" :d="d" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()

const icons: Record<string, string[]> = {
  server: ['M4 5h16v5H4z', 'M4 14h16v5H4z', 'M8 7.5h.01', 'M8 16.5h.01', 'M12 7.5h5', 'M12 16.5h5'],
  cube: ['M12 3 20 7.5v9L12 21l-8-4.5v-9z', 'M12 12 20 7.5', 'M12 12v9', 'M12 12 4 7.5'],
  shield: ['M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6z', 'm9 12 2 2 4-4'],
  key: ['M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z', 'M14.1 11.1 21 18v3h-3v-2h-2v-2h-2l-1.6-1.6', 'M3 21l6.5-6.5'],
  code: ['m8 8-4 4 4 4', 'm16 8 4 4-4 4', 'm14 4-4 16'],
  bolt: ['M13 2 4 14h7l-1 8 9-12h-7z'],
  card: ['M3 6h18v12H3z', 'M3 10h18', 'M7 15h4'],
  database: ['M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3z', 'M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6', 'M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6'],
  terminal: ['M4 4h16v16H4z', 'm8 9 3 3-3 3', 'M13 15h3'],
  search: ['M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z', 'm20 20-4-4'],
  window: ['M3 4h18v16H3z', 'M3 9h18', 'M6.5 6.5h.01', 'M9 6.5h.01'],
  chart: ['M4 20V10', 'M10 20V4', 'M16 20v-7', 'M22 20H2'],
  mail: ['M3 5h18v14H3z', 'm3 6 9 7 9-7'],
  linkedin: ['M4 9h4v11H4z', 'M6 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z', 'M12 9h3.6v1.6c.6-1 1.9-1.9 3.6-1.9 3 0 3.8 2 3.8 4.8V20h-4v-5.6c0-1.3-.3-2.4-1.6-2.4-1.4 0-1.4 1.2-1.4 2.4V20h-4z'],
  pin: ['M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z', 'M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'],
  arrow: ['M5 12h14', 'm13 6 6 6-6 6'],
  arrowUp: ['M7 17 17 7', 'M8 7h9v9'],
  cap: ['m2 9 10-5 10 5-10 5z', 'M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5', 'M22 9v6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  close: ['m6 6 12 12', 'M18 6 6 18'],
  copy: ['M9 9h11v11H9z', 'M5 15H4V4h11v1'],
  check: ['m5 12 5 5L20 7'],
  globe: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M3 12h18', 'M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z'],
}

const paths = computed(() => icons[props.name] ?? [])
</script>
