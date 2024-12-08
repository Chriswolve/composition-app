<script setup lang="ts">
  import type { IRouterLinkRaw } from '@/shared/types/IRouterLinkRaw'
  import { IconChevronDown } from '@shared/icons'
  import {
    webNavigationClass,
    webNavItemClass,
    webNavGroupClass,
    webNavGroupItemClass,
    webNavGroupItemWrapperClass,
    webNavGroupChildClass,
    activeClass,
    activeAltClass,
  } from '@shared/styles/navbar.styles'

  interface Props {
    navigation: Array<IRouterLinkRaw>
  }
  defineProps<Props>()
</script>
<template>
  <div :class="webNavigationClass">
    <template
      v-for="({ title, path, children }, i) in navigation"
      :key="i"
    >
      <RouterLink
        v-if="!children"
        :class="webNavItemClass"
        :to="path"
        :active-class="activeClass"
      >
        {{ title }}
      </RouterLink>

      <div
        v-else
        :class="webNavGroupClass"
      >
        <!-- Dropdown Trigger -->
        <RouterLink
          :class="webNavGroupItemClass"
          :active-class="activeClass"
          :to="path"
        >
          {{ title }}
          <IconChevronDown />
        </RouterLink>
        <!-- Dropdown Menu -->
        <div :class="webNavGroupItemWrapperClass">
          <RouterLink
            v-for="({ path, title }, j) in children"
            :key="j"
            :to="path"
            :class="webNavGroupChildClass(j, children.length)"
            :active-class="activeAltClass"
          >
            {{ title }}
          </RouterLink>
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped></style>
