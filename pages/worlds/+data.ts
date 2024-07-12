/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { worlds } from '@/database/worlds'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const isAdmin = Boolean(pageContext.user?.admin) || Boolean(pageContext.user?.serveradmin)
  const userId = Number(pageContext.user?.id)

  const db = await JSONFilePreset('db.json', worlds)
  const data = isAdmin ? db.data.worlds : db.data.worlds.filter(world => world.users.includes(userId))

  return {
    worlds: data
  }
}

export type Data = Awaited<ReturnType<typeof data>>
