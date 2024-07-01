/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:any) => {
  const username = pageContext.username
  //const server = pageContext.routeParams.id

  const worlds = [
    {
      worldname: 'Worldname Here'
    },
    {
      worldname: 'Another'
    },
    {
      worldname: 'This Land'
    }
  ]

  return {
    username,
    worlds
  }
}
