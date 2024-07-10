/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'
import { users } from '@/database/users'
import { worlds } from '@/database/worlds'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const serverDb = await JSONFilePreset('db.json', server)
  const usersDb = await JSONFilePreset('db.json', users)
  const worldsDb = await JSONFilePreset('db.json', worlds)

  console.log(serverDb.data.server.at(0))

  return {
    server: serverDb.data.server.at(0),
    users: usersDb.data,
    worlds: worldsDb.data
  }
}

export type Data = Awaited<ReturnType<typeof data>>
