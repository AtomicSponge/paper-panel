/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:PageContextServer) => {
  const serverId = Number(pageContext.routeParams.id)

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
    },
    {
      id: 4,
      server: 2,
      name: 'Worldname Here 2'
    },
    {
      id: 5,
      server: 2,
      name: 'Another 2'
    },
    {
      id: 6,
      server: 2,
      name: 'This Land 2'
    },
    {
      id: 7,
      server: 3,
      name: 'Worldname Here 3'
    },
    {
      id: 8,
      server: 3,
      name: 'Another 3'
    },
    {
      id: 9,
      server: 3,
      name: 'This Land 3'
    }
  ]

  const worlds = (() => {
    if(serverId === 0)
      return data
    else
      return data.filter(world => world.id === serverId)[0]
  })()

  return {
    worlds
  }
}
