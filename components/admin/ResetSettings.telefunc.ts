/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

/**
 * Resets paper-panel settings
 */
export const onResetSettings = async () => {
  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  if(serverSettings === undefined)
    return { errorMessage: 'Server path not found!' }
  try {
    fs.unlinkSync(path.join(serverSettings.path, 'db.json'))
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
