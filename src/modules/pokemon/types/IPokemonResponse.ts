// List: api/pokemon
export interface IPokemonListResponse {
  count: number
  next: string
  previous: null
  results: IPokemonItem[]
}
export interface IPokemonItem {
  name: string
  url: string
}
// Get: api/pokemon/id

export interface IPokemonGetResponse {
  abilities: AbilityElement[]
  height: number
  id: number
  moves: Move[]
  name: string
  order: number
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export interface AbilityElement {
  ability: MoveClass
  is_hidden: boolean
}

export interface MoveClass {
  name: string
}

export interface Move {
  move: MoveClass
}

export interface Sprites {
  front_default: string
  front_shiny: string
  other: Other
}

export interface Other {
  home: Home
}
export interface Home {
  front_default: string
  front_shiny: string
}

export interface Stat {
  base_stat: number
  stat: MoveClass
}

export interface Type {
  type: MoveClass
}
