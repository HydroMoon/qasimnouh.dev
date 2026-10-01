<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise" aria-hidden="true">
    <div class="absolute inset-0 bg-grid" />
    <div
      class="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
    />
    <div
      class="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-cyan/[0.07] blur-[120px] animate-float"
    />
    <div
      class="absolute inset-0 transition-opacity duration-500"
      :style="{
        opacity: active ? 1 : 0,
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(52, 211, 153, 0.07), transparent 40%)`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
// Soft spotlight that follows the pointer on devices with a fine pointer.
const x = ref(0)
const y = ref(0)
const active = ref(false)
let frame = 0

const onMove = (e: PointerEvent) => {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    x.value = e.clientX
    y.value = e.clientY
    active.value = true
  })
}

onMounted(() => {
  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', onMove, { passive: true })
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove)
  cancelAnimationFrame(frame)
})
</script>
