/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { existsSync } from 'node:fs'
import YAML from 'yaml'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

/**
 * Save server configuration
 */
export const onSave = async (data:any) => {
  if (typeof data['timings']['hidden-config-entries'] === 'string') {
    data['timings']['hidden-config-entries'] =
      data['timings']['hidden-config-entries'].replace(/(\r\n|\n|\r)/gm, '').split(',')
  }

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (serverSettings !== undefined && existsSync(serverSettings.path)) {
      if (data === undefined) throw new Error('Unable to save!  Missing data!')
      await fs.writeFile(path.join(serverSettings.path, 'config', 'paper-global.yml'), YAML.stringify(data))
    } else {
      throw new Error('Unable to find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
