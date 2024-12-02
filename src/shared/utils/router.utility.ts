import type { IRouterLinkRaw } from '@shared/types/IRouterLinkRaw'
import type { IRoute } from '../types/IRoute'
import { serialize, capitalize, trim } from './string.utility'
import type { IRouteRecordSingleView } from '../types/IRouteRecordSingleView'
export const getChildren = (
  children: IRoute[] | undefined,
  parent: IRoute,
): IRouteRecordSingleView[] | undefined => {
  return (
    children?.map((child) => {
      const name = serialize(child.title)
      return {
        name: name,
        title: child.title,
        path: parent.path + child.path,
        component: () =>
          import(
            `@/modules/${serialize(parent.title)}/views/${parent.title + trim(child.title)}.vue`
          ),
      } as IRouteRecordSingleView
    }) ?? undefined
  )
}

export const getRoutes = (routes: IRoute[]): IRouterLinkRaw[] => {
  return routes.map((route: IRoute) => {
    const name = serialize(route.title)
    const scope =
      route.scope === 'public' ? `../../shared` : `../../modules/${name}`

    const shelf = route.children ? 'layout' : 'view'
    const url = `${scope}/${shelf}s/${route.title + capitalize(shelf)}.vue`
    const redirect = route.redirect ? `${route.path + route.redirect}` : ''

    return {
      name: name,
      title: route.title,
      path: route.path,
      redirect: redirect,
      component: () => import(/* @vite-ignore */ url),
      children: getChildren(route.children, route),
    } as IRouterLinkRaw
  })
}
