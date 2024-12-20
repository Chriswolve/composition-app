import { computed, ref } from 'vue'
import { listPokemon } from '../api/pokemonApi'
import type { IPokemon } from '../types/IPokemon'

const pokemon = ref<IPokemon[]>([])
const isLoading = ref(true)
// Custom hook to manage Pokemon data.
export const usePokemon = () => {
  // Check if the Pokemon list is empty.
  // If empty, fetch the list of Pokemon.
  if (pokemon.value.length <= 0) {
    // Fetch the list of Pokemon and update the state.
    listPokemon().then((data) => {
      pokemon.value = data
      isLoading.value = false
    })
  }

  // Return the Pokemon data, the count of Pokemon, and the loading state.
  return {
    pokemon,
    // Computed property to get the count of Pokemon.
    count: computed(() => pokemon.value.length),
    isLoading,
  }
}
