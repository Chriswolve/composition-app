type IMove = {
  name: string
}
export type IPokemon = {
  id: number
  name: string
  frontSprite?: string
  homeSprite?: string
  moves: IMove[]
}
