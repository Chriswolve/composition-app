<script setup lang="ts">
  import { ref } from 'vue'

  import SimpleWrapper from './shared/components/SimpleWrapper.vue'
  import NavBar from './shared/components/NavBar/NavBar.vue'
  import Logo from '@/assets/vite.svg'

  import { layoutClasses, wrapperClasses } from './shared/styles/app.styles'

  import { useOuterClick } from './shared/hooks/useOuterClick'
  import { useRouterNavigation } from './shared/hooks/useRouterNavigation'

  const navbar = ref<null | { root: HTMLElement }>(null)

  const { navigation } = useRouterNavigation()

  useOuterClick(navbar)
</script>

<template>
  <div :class="layoutClasses">
    <NavBar
      ref="navbar"
      :logo="Logo"
      :navigation="navigation"
    />

    <SimpleWrapper :class="wrapperClasses">
      <RouterView />
    </SimpleWrapper>
  </div>
</template>

<style scoped></style>
