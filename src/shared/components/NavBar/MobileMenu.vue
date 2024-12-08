<script setup lang="ts">
  import { activeClass, activeAltClass } from '@shared/styles/navbar.styles'

  import type { IRouterLinkRaw } from '@/shared/types/IRouterLinkRaw'
  import { ref, watch } from 'vue'
  import IconChevronDown from '@shared/icons/IconChevronDown.vue'
  interface Props {
    isOpen: boolean
    navigation: Array<IRouterLinkRaw>
  }

  const mobileMenu = ref<HTMLElement | null>(null)
  let menuSize = 0

  const props = defineProps<Props>()

  watch(
    () => props.isOpen,
    () => {
      if (mobileMenu.value) {
        showMenu(mobileMenu.value)
      }
    },
  )

  const resizeMainMenu = () => {
    const mainMenu = mobileMenu.value

    if (!mainMenu) {
      return
    }

    mainMenu.style.height = `${menuSize}px`
  }
  const showMenu = (menu: HTMLElement, events: Array<() => void> = []) => {
    const value = menu.scrollHeight

    if (menu.classList.contains('invisible')) {
      menu.classList.remove('invisible')
      menu.style.height = value + 'px'
      menuSize += value
    } else {
      menu.style.height = '0px'
      menuSize -= value
      events.push(() => menu.classList.add('invisible'))
    }

    resizeMainMenu()

    menu.addEventListener(
      'transitionend',
      () => {
        events.forEach((callback) => {
          callback()
        })
      },
      { once: true },
    )
  }
  const toggleMainMenu = ($event: Event) => {
    const button = $event.currentTarget as HTMLButtonElement
    const targetID = button?.getAttribute('target')
    let menu = null

    if (targetID) menu = document.getElementById(targetID)

    if (menu) {
      button.classList.add('disable-events')
      showMenu(menu, [() => button.classList.remove('disable-events')])
    } else {
      console.log('No error')
    }
  }
</script>
<template>
  <div
    id="mobile-menu"
    ref="mobileMenu"
    class="mobile-menu invisible md:hidden"
  >
    <div class="mt-2 bg-zinc-800">
      <template
        v-for="(link, index) in navigation"
        :key="index"
      >
        <RouterLink
          v-if="!link.children"
          class="block px-4 py-3 text-sm font-normal hover:bg-gray-700"
          :to="link.path"
          :active-class="activeClass"
        >
          {{ link.title }}
        </RouterLink>

        <div
          v-else
          class="relative"
        >
          <button
            class="flex w-full items-center px-4 py-3 text-left text-sm font-normal
              hover:bg-gray-700"
            :target="'mobile-submenu' + index"
            @click="toggleMainMenu"
          >
            {{ link.title }}
            <IconChevronDown />
          </button>
          <div
            :id="'mobile-submenu' + index"
            class="sub-menu invisible"
          >
            <RouterLink
              v-for="(child, index) in link.children"
              :key="index"
              :to="child.path"
              class="block px-4 py-3 pl-8 text-sm font-normal hover:bg-gray-700"
              :active-class="activeAltClass"
            >
              {{ child.title }}
            </RouterLink>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .sub-menu {
    height: 0;
    overflow: hidden;
    transition: height 0.5s ease;
  }

  .invisible {
    height: 0;
  }
  .disable-events {
    pointer-events: none;
  }

  .mobile-menu {
    overflow: hidden; /* Oculta contenido cuando la altura es menor */
    height: 0; /* Altura inicial para ocultar */
    transition: height 0.5s ease;
  }
</style>
