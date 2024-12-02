import { pokemonRoutes } from '@/modules/pokemon/router/pokemon.routes'
import { appRoutes } from '@/shared/routes/app.routes'

export const routes = [...appRoutes, ...pokemonRoutes]
