import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext: PageContextServer) => {
  const world = pageContext.routeParams.id
  const worldname = 'Worldname Here'
  return {
    world,
    worldname
  }
}
