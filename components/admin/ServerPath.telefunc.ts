/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

export const onUpdateServerPath = async ({ path }:{ path:string }):Promise<void> => {
  const db = await JSONFilePreset('db.json', server)
  await db.update(({ server }) => {
    if(server !== undefined) server[0].path = path
  })
}
