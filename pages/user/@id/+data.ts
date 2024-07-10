/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { users } from '@/database/users'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const userId = Number(pageContext.routeParams.id)

  const db = await JSONFilePreset('db.json', users)
  const user = db.data.user.filter(user => user.id === userId)[0]

  return {
    user
  }
}

export type Data = Awaited<ReturnType<typeof data>>
