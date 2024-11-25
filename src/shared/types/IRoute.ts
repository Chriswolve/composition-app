export type IRoute = {
  title: string
  path: string
  scope?: string
  redirect?: string
  children?: IRoute[]
}
