import type { IRouterLinkRaw } from '@shared/types/IRouterLinkRaw'
import { getRoutes } from '@shared/utils/router.utility'

import type { IRoute } from '@shared/types/IRoute'

const routes: IRoute[] = [
  {
    title: 'Pokemon',
    path: '/pokemon',
    redirect: '/list',
    children: [
      {
        title: 'List',
        path: '/list',
      },
      {
        title: 'Get By Id',
        path: '/details',
      },
      {
        title: 'Search',
        path: '/search',
      },
    ],
  },
]

export const pokemonRoutes: IRouterLinkRaw[] = getRoutes(routes)
