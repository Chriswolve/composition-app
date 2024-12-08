import { computed, ref } from 'vue'
import { listPokemon } from '../api/pokemonApi'
import type { IPokemon } from '../types/IPokemon'

export const usePokemon = () => {
  const pokemon = ref<IPokemon[]>([])
  const isLoading = ref(true)

  listPokemon().then((data) => {
    pokemon.value = data
    isLoading.value = false
  })

  return { pokemon, count: computed(() => pokemon.value.length), isLoading }
}
