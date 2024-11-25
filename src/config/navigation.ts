import type { IRoute } from '@/shared/types/IRoute'

export const navigation: IRoute[] = [
  {
    title: 'Home',
    path: '/',
    scope: 'shared',
  },
  {
    title: 'About',
    path: '/about',
    scope: 'shared',
  },
  {
    title: 'Counter',
    path: '/counter',
    scope: 'module',
  },
  {
    title: 'Pokemon',
    path: '/pokemon',
    scope: 'module',
    redirect: '/list',
    children: [
      {
        title: 'Pokemon List',
        path: '/list',
      },
      {
        title: 'Pokemon By Id',
        path: '/details/:id',
      },
      {
        title: 'Pokemon Search',
        path: '/search',
      },
    ],
  },
]
