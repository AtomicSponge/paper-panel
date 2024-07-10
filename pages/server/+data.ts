/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const db = await JSONFilePreset('db.json', server)

  return {
    server: db.data.server.at(0)
  }
}

export type Data = Awaited<ReturnType<typeof data>>
