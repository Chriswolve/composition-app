import type { IRouterLinkRaw } from '@shared/types/IRouterLinkRaw'
import { getRoutes } from '../utils/router.utility'

import type { IRoute } from '../types/IRoute'

const routes: IRoute[] = [
  {
    title: 'Home',
    path: '/',
    scope: 'public',
  },
  {
    title: 'About',
    path: '/about',
    scope: 'public',
  },
  {
    title: 'Counter',
    path: '/counter',
  },
]

export const appRoutes: IRouterLinkRaw[] = getRoutes(routes)

// import { pokemonRoutes } from '@/modules/pokemon/router/pokemon.routes'
// export const appRoutes: IRouterLinkRaw[] = [
//   {
//     name: 'home',
//     title: 'Home',
//     path: '/',
//     component: HomeView,
//   },
//   {
//     name: 'about',
//     title: 'About',
//     path: '/about',
//     component: () => import('@shared/views/AboutView.vue'),
//   },
//   {
//     name: 'counter',
//     title: 'Counter',
//     path: '/counter',
//     component: () => import('@/modules/counter/views/CounterView.vue'),
//   },

//   {
//     ...pokemonRoutes,
//   },
// ]
