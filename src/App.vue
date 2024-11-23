<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './shared/components/NavBar.vue'
</script>

<template>
  <div class="container mx-auto flex h-screen flex-col py-3">
    <NavBar />

    <div
      class="mt-3 grow rounded border border-zinc-800 bg-gray-100 p-4 shadow-md
        dark:border-zinc-700 dark:bg-zinc-900"
    >
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
