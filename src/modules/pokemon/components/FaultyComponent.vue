<!-- src/components/FaultyComponent.vue -->
<template>
  <div>
    <h2>This is a Faulty Component</h2>
    <p>If you see this, something went wrong!</p>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'

  // Intentionally throw an error during setup
  onMounted(() => {
    throw new Error('Intentional Error from FaultyComponent')
  })
</script>

<style scoped>
  h2 {
    color: red;
  }
</style>
