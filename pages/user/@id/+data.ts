import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext: PageContextServer) => {
  const username = pageContext.routeParams.id
  return {
    username
  }
}
