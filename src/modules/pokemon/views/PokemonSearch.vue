<script setup lang="ts">
  import { usePokemon } from '../hooks/usePokemon'

  const { pokemon, isLoading } = usePokemon()
</script>
<template>
  <div>
    <h1>Pokemon search</h1>
    <div v-if="!isLoading">
      <div
        v-for="{ name, id } of pokemon"
        :key="id"
      >
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>
