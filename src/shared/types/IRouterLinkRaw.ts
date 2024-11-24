import type { RouteRecordRaw } from 'vue-router'
import type { IRouteRecordSingleView } from './IRouteRecordSingleView'

export type IRouterLinkRaw = RouteRecordRaw & {
  title?: string
  children?: IRouteRecordSingleView[]
}
