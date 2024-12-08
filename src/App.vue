<script setup lang="ts">
  import { ref, provide, onMounted, onUnmounted } from 'vue'
  import { RouterView } from 'vue-router'
  import SimpleWrapper from './shared/components/SimpleWrapper.vue'

  import Logo from '@/assets/vite.svg'

  import NavBar from './shared/components/NavBar/NavBar.vue'

  import { layoutClasses, wrapperClasses } from './shared/styles/app.styles'

  import { routes } from '@/router/routes'

  const navbar = ref<null | { root: HTMLElement }>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (!navbar.value) return

    const target = event.target as Node
    if (!navbar.value.root.contains(target)) {
      incrementOuterClick()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })

  const outerClicks = ref(0)

  const incrementOuterClick = () => {
    outerClicks.value++
  }

  provide('outerClick', outerClicks)
</script>

<template>
  <div :class="layoutClasses">
    <NavBar
      ref="navbar"
      :logo="Logo"
      :navigation="routes"
    />

    <SimpleWrapper :class="wrapperClasses">
      <RouterView />
    </SimpleWrapper>
  </div>
</template>

<style scoped></style>
