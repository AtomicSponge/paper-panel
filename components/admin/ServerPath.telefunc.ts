/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

export const onUpdateServerPath = async ({ path }:{ path:string }) => {
  const db = await JSONFilePreset('db.json', server)

  if(db.data.server === undefined) return { errorMessage: 'Server data not found!' }
  if(!fs.existsSync(path)) return { errorMessage: `Unable to access path '${path}'!` }

  await db.update(({ server }) => {
    server[0].path = path
  })
}
