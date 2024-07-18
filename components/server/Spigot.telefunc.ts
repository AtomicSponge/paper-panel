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
 * Save Spigot configuration
 */
export const onSave = async (data:any) => {
  //  Convert from comma seperated list to array
  data['advancements']['disabled'] = data['advancements']['disabled'].split(',')
  data['commands']['spam-exclusions'] = data['commands']['spam-exclusions'].split(',')
  data['commands']['replace-commands'] = data['commands']['replace-commands'].split(',')

  console.log('Saving Spigot config...')
  console.log(data)

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (serverSettings !== undefined && fs.existsSync(serverSettings.path)) {
      if (data === undefined) throw new Error('Unable to save!  Missing data!')
      fs.writeFileSync(path.join(serverSettings.path, 'spigot.yml'), YAML.stringify(data))
    } else {
      throw new Error('Unable to find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
