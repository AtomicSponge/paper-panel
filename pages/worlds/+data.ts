/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { worlds } from '@/database/worlds'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const isAdmin = Boolean(pageContext.user?.admin) || Boolean(pageContext.user?.serveradmin)
  const userId = Number(pageContext.user?.id)

  const data = isAdmin ? worlds.world : worlds.world.filter(world => world.users.includes(userId))

  return {
    worlds: data
  }
}

export type Data = Awaited<ReturnType<typeof data>>
