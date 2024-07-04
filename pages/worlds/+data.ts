/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:PageContextServer) => {
  //const serverId = Number(pageContext.routeParams.id)

  const worlds = [
    {
      id: 1,
      users: [ 1, 2 ],
      name: 'Worldname Here'
    },
    {
      id: 2,
      users: [ 1 ],
      name: 'Another'
    },
    {
      id: 3,
      users: [ 2 ],
      name: 'This Land'
    }
  ]

  return {
    worlds
  }
}
