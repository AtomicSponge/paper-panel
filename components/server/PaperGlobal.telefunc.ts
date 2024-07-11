/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'
import YAML from 'yaml'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

/**
 * Save server configuration
 */
export const onSave = async (data:any):Promise<void> => {
  console.log('Saving Paper Global config...')
  console.log(data)

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  if (serverSettings !== undefined && fs.existsSync(serverSettings.path)) {
    if (data === undefined) throw new Error('Unable to save!  Missing data!')
  } else {
    throw new Error('Unable to find server path!')
  }
}
