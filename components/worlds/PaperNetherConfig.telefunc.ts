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
 * Save per nether configuration
 */
export const onSave = async ({ folder, data }:{ folder:string, data:string }) => {
  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  folder += '_nether'

  try {
    if (serverSettings !== undefined && fs.existsSync(path.join(serverSettings.path, folder))) {
      if (data === undefined) throw new Error('Unable to save!  Missing data!')
      fs.writeFileSync(path.join(serverSettings.path, folder, 'paper-world.yml'), data)
    } else {
      throw new Error('Unable to save!  Cannot find world path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
