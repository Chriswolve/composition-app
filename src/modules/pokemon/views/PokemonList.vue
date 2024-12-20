<script setup lang="ts">
  import { watch } from 'vue'
  import { usePokemon } from '../hooks/usePokemon'
  import {
    titleClasses,
    wraperClasses,
    pokemonClasses,
    pokemonTextClasses,
  } from '../styles/pokemonList.styles'

  const { pokemon, count, isLoading } = usePokemon()

  watch(
    () => pokemon.value,
    (values) => {
      if (values.length >= 45) {
        pokemon.value = values.slice(0, 1)
      }
    },
  )
</script>
<template>
  <div :class="titleClasses">Pokemon List {{ count }}</div>
  <div v-if="!isLoading">
    <div :class="wraperClasses">
      <div
        :class="pokemonClasses"
        v-for="{ id, name, frontSprite } in pokemon"
        :key="id"
      >
        <img
          :src="frontSprite"
          alt=""
        />
        <p :class="pokemonTextClasses">{{ name }}</p>
      </div>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<style scoped></style>
