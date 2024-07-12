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
export const onSave = async (data:any) => {
  console.log('Saving Paper Global config...')
  console.log(data)

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (serverSettings !== undefined && fs.existsSync(serverSettings.path)) {
      if (data === undefined) throw new Error('Unable to save!  Missing data!')
      fs.writeFileSync(path.join(serverSettings.path, 'config', 'paper-global.yml'), YAML.stringify(data))
    } else {
      throw new Error('Unable to find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
