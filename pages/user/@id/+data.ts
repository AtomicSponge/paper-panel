/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { users } from '@/database/users'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const userLogin = pageContext.routeParams.id

  const db = await JSONFilePreset('db.json', users)
  const user = db.data.users.filter(user => user.login === userLogin)[0]

  return {
    user
  }
}

export type Data = Awaited<ReturnType<typeof data>>
