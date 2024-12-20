<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import type { IPokemon } from '../types/IPokemon'
  import { getPokemon } from '../api/pokemonApi'
  import { capitalize } from '@shared/utils/string.utility'

  const pokemon = ref<IPokemon>()
  const moves = computed(() => pokemon.value?.moves.slice(0, 5) ?? [])

  onMounted(async () => {
    pokemon.value = await getPokemon()
  })
</script>
<template>
  <div>
    <div class="pb-4 pt-2 text-center text-base font-medium">
      {{ capitalize(pokemon?.name) }}
    </div>

    <div class="flex justify-between">
      <img
        :src="pokemon?.homeSprite"
        class="h-40 w-40"
        alt=""
      />

      <div class="flex flex-col">
        <div
          v-for="(move, index) in moves"
          :key="index"
        >
          {{ move.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
