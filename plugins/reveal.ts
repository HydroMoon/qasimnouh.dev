// v-reveal: fades and lifts an element in the first time it scrolls into view.
// Usage: v-reveal or v-reveal="150" (delay in ms)
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      )
    }
    return observer
  }

  nuxtApp.vueApp.directive<HTMLElement, number | string | undefined>('reveal', {
    getSSRProps: () => ({ class: 'reveal' }),
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      // Elements already on screen at mount (e.g. the hero) shouldn't wait on the observer,
      // which browsers pause in background tabs.
      if (el.getBoundingClientRect().top < window.innerHeight) {
        setTimeout(() => el.classList.add('is-visible'), 30)
        return
      }
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
