import type { IRouterLinkRaw } from '@/shared/types/IRouterLinkRaw'
import type { IRouteRecordSingleView } from '@/shared/types/IRouteRecordSingleView'
import PokemonLayout from '../layouts/PokemonLayout.vue'

const ROUTE_NAME = 'pokemon'
const ROUTE_TITLE = 'Pokemon'

const children: IRouteRecordSingleView[] = [
  {
    name: `${ROUTE_NAME}-list`,
    title: 'List',
    path: `/${ROUTE_NAME}/list`,
    component: () => import('@/modules/pokemon/views/PokemonList.vue'),
  },
  {
    name: `${ROUTE_NAME}-search`,
    title: 'Search',
    path: `/${ROUTE_NAME}/search`,
    component: () => import('@/modules/pokemon/views/PokemonSearch.vue'),
  },
  {
    name: `${ROUTE_NAME}-id`,
    title: 'Get by ID',
    path: `/${ROUTE_NAME}/id`,
    component: () => import('@/modules/pokemon/views/PokemonById.vue'),
  },
]

export const pokemonRoutes: IRouterLinkRaw = {
  name: ROUTE_NAME,
  path: `/${ROUTE_NAME}`,
  title: ROUTE_TITLE,
  redirect: `/${ROUTE_NAME}/list`,
  component: PokemonLayout,
  children: children,
}
