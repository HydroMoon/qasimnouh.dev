<template>
  <span ref="el">{{ display }}{{ suffix }}</span>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ to: number; suffix?: string; duration?: number }>(), {
  suffix: '',
  duration: 1600,
})

// Server-render the final value so the number is correct without JS.
const display = ref(props.to)
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  display.value = 0
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry?.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / props.duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        display.value = Math.round(eased * props.to)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    { threshold: 0.5 },
  )
  observer.observe(el.value)
})
</script>
