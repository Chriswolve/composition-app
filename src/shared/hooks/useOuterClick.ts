import type { Ref } from 'vue'
import { onMounted, onUnmounted, provide, ref } from 'vue'

export const useOuterClick = (
  cointainer: Ref<null | { root: HTMLElement }>,
) => {
  const outerClicks = ref(0)

  const handleClickOutside = (event: MouseEvent) => {
    if (!cointainer.value) return

    const target = event.target as Node
    if (!cointainer.value.root.contains(target)) {
      outerClicks.value++
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  provide('outerClick', outerClicks)

  return {
    outerClicks,
  }
}
