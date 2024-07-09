/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { worlds } from '@/database/worlds'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const isAdmin = pageContext.user?.admin
  console.log(isAdmin)

  return {
    worlds: worlds.world
  }
}

export type Data = Awaited<ReturnType<typeof data>>
