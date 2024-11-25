import type { IRouterLinkRaw } from '@shared/types/IRouterLinkRaw'
import type { IRoute } from '../types/IRoute'
import { serialize, capitalize, trim } from './string.utility'
import type { IRouteRecordSingleView } from '../types/IRouteRecordSingleView'
export const getChildren = (
  children: IRoute[] | undefined,
  parent: string,
): IRouteRecordSingleView[] | undefined => {
  return (
    children?.map((child) => {
      const name = serialize(child.title)
      return {
        name: name,
        title: child.title,
        path: child.path,
        component: import(`@/modules/${parent}/views/${trim(child.title)}.vue`),
      } as IRouteRecordSingleView
    }) ?? undefined
  )
}

export const getRoutes = (routes: IRoute[]): IRouterLinkRaw[] => {
  return routes.map((route: IRoute) => {
    const name = serialize(route.title)
    const scope =
      route.scope === 'shared'
        ? `../../${route.scope}`
        : `../../${route.scope}s/${name}`

    const shelf = route.children ? 'layout' : 'view'

    const url = `${scope}/${shelf}s/${route.title + capitalize(shelf)}.vue`
    const redirect = route.redirect ? `${route.path + route.redirect}` : ''
    return {
      name: name,
      title: route.title,
      path: route.path,
      redirect: redirect,
      component: () => import(/* @vite-ignore */ url),
      children: getChildren(route.children, name),
    } as IRouterLinkRaw
  })
}
