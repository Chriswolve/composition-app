<script setup lang="ts">
import { RouterLink } from 'vue-router'
interface ILink {
  path: string
  name: string
}

const navigation: Array<ILink> = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/counter',
    name: 'Counter',
  },
]
</script>
<template>
  <div
    class="rounded border border-zinc-800 bg-gray-100 p-4 shadow-md dark:bg-zinc-900"
  >
    <nav class="flex items-center justify-between">
      <!-- Logo -->
      <img
        class="logo"
        src="@/assets/logo.svg"
        alt="Vue logo"
        width="125"
        height="125"
      />

      <!-- Navigation Links -->
      <div class="flex space-x-6">
        <RouterLink
          class="text-sm font-medium text-black hover:text-gray-100 dark:text-gray-200
            dark:hover:text-emerald-400"
          v-for="(item, index) in navigation"
          :key="index"
          :to="item.path"
        >
          {{ item.name }}
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.logo {
  width: 50px;
  height: auto;
}
</style>
