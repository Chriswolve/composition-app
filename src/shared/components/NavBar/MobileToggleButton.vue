<script setup lang="ts">
  import { IconToggle } from '@shared/icons'

  const emit = defineEmits(['openMenu'])
</script>
<template>
  <div>
    <button
      id="mobile-menu-btn"
      target="mobile-menu"
      class="hover:text-gray-300"
      @click="emit('openMenu')"
    >
      <IconToggle />
    </button>
  </div>
</template>

<style scoped></style>
