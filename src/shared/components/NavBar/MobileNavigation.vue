<script setup lang="ts">
  import { activeClass, activeAltClass } from '@shared/styles/navbar.styles'
  import { IconChevronDown, IconChevronUp } from '@shared/icons'
  import type { IRouterLinkRaw } from '@/shared/types/IRouterLinkRaw'
  import { reactive } from 'vue'

  interface Props {
    isOpen: boolean
    navigation: Array<IRouterLinkRaw>
  }

  defineProps<Props>()

  const expands = reactive<Record<number, boolean>>({})

  const openSubmenu = (index: number) => {
    expands[index] = !expands[index]
  }
</script>

<template>
  <div>
    <!-- Envolver el elemento en un <transition> -->
    <transition name="expand">
      <div
        v-if="isOpen"
        class="menu"
      >
        <div
          v-for="({ path, title, children }, i) of navigation"
          class="flex flex-col"
          :key="i"
        >
          <RouterLink
            v-if="!children"
            class="block px-4 py-3 text-sm font-normal hover:bg-gray-700"
            :to="path"
            :active-class="activeClass"
          >
            {{ title }}
          </RouterLink>

          <button
            v-else
            class="flex px-4 py-3 text-left text-sm font-normal hover:bg-gray-700"
            @click.stop="openSubmenu(i)"
          >
            {{ title }}
            <IconChevronDown v-if="!expands[i]" />
            <IconChevronUp v-else />
          </button>
          <transition
            name="expand"
            class="menu"
          >
            <div
              v-if="expands[i]"
              class="block"
              :id="'route' + i"
            >
              <RouterLink
                v-for="({ title, path }, j) in children"
                :key="j"
                :to="path"
                class="block py-3 pl-10 text-sm font-normal hover:bg-gray-700"
                :active-class="activeAltClass"
              >
                {{ title }}
              </RouterLink>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  /* Estilo base de la caja */
  .menu {
    overflow: hidden;
  }

  /* Transiciones para entrada y salida */
  .expand-enter-active {
    transition: max-height 1.5s ease;
  }
  .expand-leave-active {
    transition: max-height 0.5s ease;
  }

  .expand-enter-from,
  .expand-leave-to {
    max-height: 0px;
  }

  .expand-enter-to,
  .expand-leave-from {
    max-height: 50vh;
  }
</style>
