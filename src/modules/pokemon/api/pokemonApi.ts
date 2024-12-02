import { apiClient, axiosInstance } from '@/shared/api'
import type {
  IPokemonListResponse,
  IPokemonGetResponse,
} from '../types/IPokemonResponse'

import type { IPokemon } from '../types/IPokemon'

const API_URL = 'https://pokeapi.co/api/v2/'

export const pokemonApi = apiClient(API_URL)

const getPokemonData = async (
  { id, name }: { id?: number; name?: string },
  url = '',
): Promise<IPokemonGetResponse> => {
  // Make GET request to Pokemon API with id or name
  const { data } = await pokemonApi.get<IPokemonGetResponse>(
    url || `pokemon/${id || name}`,
  )
  // Return data response as Promise<IPokemonGetResponse>
  return data as IPokemonGetResponse
}

export const listPokemon = async ({
  limit = 45,
  page = 1,
}: {
  limit?: number
  page?: number
} = {}): Promise<IPokemon[]> => {
  // Make GET request to Pokemon API with pagination parameters
  const { data } = await pokemonApi.get<IPokemonListResponse>(
    `pokemon?limit=${limit}&offset=${(page - 1) * limit}`,
  )

  // Fetch detailed Pokemon data for each result using its name
  const pokemonPromises = data.results.map(async (item) => {
    const pokemon = await getPokemonData({ name: item.name })
    // Format data as IPokemon
    return {
      id: pokemon.id,
      name: pokemon.name,
      frontSprite: pokemon.sprites.front_default,
    } as IPokemon
  })

  // Wait for all Pokemon detail requests to complete and return array
  return Promise.all(pokemonPromises)
}

export const getPokemon = async (
  { id, name }: { id?: number; name?: string } = { name: 'bulbasaur' },
): Promise<IPokemon> => {
  // Fetch the detailed Pokémon data from the API.
  const pokemon = await getPokemonData({ id, name })

  // Format data as IPokemon
  return {
    id: pokemon.id, // Assign the Pokémon's ID.
    name: pokemon.name, // Assign the Pokémon's name.
    frontSprite: pokemon.sprites.front_default,
    homeSprite: pokemon.sprites.other.home.front_default,
    moves: pokemon.moves.map((item) => {
      // Map the moves array to extract only the move names.
      return {
        name: item.move.name,
      }
    }),
  } as IPokemon
}

export const listPokemonAlternative = async (): Promise<IPokemon[]> => {
  const apiPokemon = axiosInstance(API_URL)
  const { data } =
    await apiPokemon.get<IPokemonListResponse>('/pokemon?limit=45')
  const pokemonPromises: Promise<IPokemon>[] = []

  for (const { url } of data.results) {
    const promise = axiosInstance(url)
      .get<IPokemonGetResponse>('')
      .then(({ data }) => {
        return {
          id: data.id,
          name: data.name,
          frontSprite: data.sprites.front_shiny,
        } as IPokemon
      })
    pokemonPromises.push(promise)
  }

  const pokemons = await Promise.all(pokemonPromises)
  return pokemons
}

export default pokemonApi
