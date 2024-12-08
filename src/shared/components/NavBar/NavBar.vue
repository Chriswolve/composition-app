<script setup lang="ts">
  import { ref, watch, inject } from 'vue'
  import type { IRouterLinkRaw } from '../../types/IRouterLinkRaw'

  import MobileToggleButton from './MobileToggleButton.vue'

  import MobileNavigation from './MobileNavigation.vue'
  import NavLogo from './NavLogo.vue'
  import MainNavigation from './MainNavigation.vue'
  import {
    navClass,
    wrapperClass,
    webContainerClass,
  } from '@shared/styles/navbar.styles'

  interface Props {
    navigation: Array<IRouterLinkRaw>
    logo: string
  }

  defineProps<Props>()
  const navBar = ref<HTMLElement | null>(null)
  // Mobile options
  const isOpen = ref(false)

  defineExpose({
    root: navBar,
  })

  const outerClickEvent = inject('outerClick', null)

  if (outerClickEvent) {
    watch(outerClickEvent, () => {
      // check if Mobile Menu is open
      if (isOpen.value) {
        toggleMobileMenu()
      }
    })
  }

  const toggleMobileMenu = () => {
    isOpen.value = !isOpen.value
  }
</script>
<template>
  <nav
    ref="navBar"
    :class="navClass"
  >
    <div :class="wrapperClass">
      <div :class="webContainerClass">
        <!-- Logo -->
        <NavLogo :logo="logo" />

        <!-- Main Navigation -->
        <MainNavigation :navigation="navigation" />

        <!-- Mobile Menu Toggle -->
        <MobileToggleButton
          class="md:hidden"
          @open-menu="toggleMobileMenu"
        />
      </div>
    </div>

    <MobileNavigation
      class="mt-2 md:hidden"
      :is-open="isOpen"
      :navigation="navigation"
    />
  </nav>
</template>
