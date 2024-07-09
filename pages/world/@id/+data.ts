/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { worlds } from '@/database/worlds'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const worldId = Number(pageContext.routeParams.id)

  const world = worlds.worlds.filter(world => world.id === worldId)[0]

  return {
    world
  }
}

export type Data = Awaited<ReturnType<typeof data>>
