import { pokemonRoutes } from '@/modules/pokemon/router/pokemon.routes'
import { appRoutes } from '@/shared/routes/app.routes'

export const useRouterNavigation = () => {
  return {
    navigation: [...appRoutes, ...pokemonRoutes],
  }
}
