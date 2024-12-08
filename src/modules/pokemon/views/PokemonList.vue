<script setup lang="ts">
  import { usePokemon } from '../hooks/usePokemon'
  import {
    titleClasses,
    wraperClasses,
    pokemonClasses,
    pokemonTextClasses,
  } from '../styles/pokemonList.styles'

  const { pokemon, count, isLoading } = usePokemon()
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
