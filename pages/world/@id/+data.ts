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
  const world = pageContext.routeParams.id
  const worldname = 'Worldname Here'
  return {
    username,
    world,
    worldname
  }
}
