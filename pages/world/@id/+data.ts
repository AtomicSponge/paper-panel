/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:PageContextServer) => {
  const worldId = Number(pageContext.routeParams.id)

  const data = [
    {
      id: 1,
      server: 1,
      name: 'Worldname Here 1'
    },
    {
      id: 2,
      server: 1,
      name: 'Another 1'
    },
    {
      id: 3,
      server: 1,
      name: 'This Land 1'
    }
  ]

  const world = data.filter(world => world.id === worldId)[0]

  return {
    world
  }
}
