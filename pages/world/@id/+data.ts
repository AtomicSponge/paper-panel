/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:any) => {
  const worldId = pageContext.routeParams.id

  const data = [
    {
      id: 1,
      server: 1,
      name: 'Worldname Here'
    },
    {
      id: 2,
      server: 1,
      name: 'Another'
    },
    {
      id: 3,
      server: 1,
      name: 'This Land'
    },
    {
      id: 4,
      server: 2,
      name: 'Worldname Here'
    },
    {
      id: 5,
      server: 2,
      name: 'Another'
    },
    {
      id: 6,
      server: 2,
      name: 'This Land'
    },
    {
      id: 7,
      server: 3,
      name: 'Worldname Here'
    },
    {
      id: 8,
      server: 3,
      name: 'Another'
    },
    {
      id: 9,
      server: 3,
      name: 'This Land'
    }
  ]

  const world = data.filter(world => world.id === worldId)[0]

  return {
    world
  }
}
