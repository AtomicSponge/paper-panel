/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

export const onUpdateServerPath = async ({ path }:{ path:string }) => {
  const db = await JSONFilePreset('db.json', server)
  if(db.data.server === undefined) return { errorMessage: 'Server data not found!' }
  await db.update(({ server }) => {
    server[0].path = path
  })
}
