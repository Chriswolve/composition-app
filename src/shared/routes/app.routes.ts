// import HomeView from '@/shared/views/HomeView.vue'
import { navigation } from '@/config/navigation'
import type { IRouterLinkRaw } from '@shared/types/IRouterLinkRaw'
import { getRoutes } from '../utils/router.utility'
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

export const appRoutes: IRouterLinkRaw[] = getRoutes(navigation)
