<script setup lang="ts">
  import { ref } from 'vue'
  import { listPokemon } from '../api/pokemonApi'
  import type { IPokemon } from '../types/IPokemon'

  const pokemons = ref<IPokemon[]>([])

  pokemons.value = await listPokemon()
</script>
<template>
  <div class="pb-4 pt-2 text-center text-base font-medium">Pokemon List</div>
  <div>
    <div class="flex flex-wrap justify-center">
      <div
        class="m-2 flex w-1/6 flex-col items-center justify-center"
        v-for="{ id, name, frontSprite } in pokemons"
        :key="id"
      >
        <img
          :src="frontSprite"
          alt=""
        />
        <p class="text-xs">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
