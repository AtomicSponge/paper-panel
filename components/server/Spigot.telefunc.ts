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
  if (typeof data['advancements']['disabled'] === 'string') {
    data['advancements']['disabled'] =
      data['advancements']['disabled'].replace(/(\r\n|\n|\r)/gm, '').split(',')
  }
  if (typeof data['commands']['spam-exclusions'] === 'string') {
    data['commands']['spam-exclusions'] =
      data['commands']['spam-exclusions'].replace(/(\r\n|\n|\r)/gm, '').split(',')
  }
  if (typeof data['commands']['replace-commands'] === 'string') {
    data['commands']['replace-commands'] =
      data['commands']['replace-commands'].replace(/(\r\n|\n|\r)/gm, '').split(',')
  }

  const numberCheckItems = [
    'seed-village', 'seed-desert', 'seed-igloo', 'seed-jungle', 'seed-swamp', 'seed-monument',
    'seed-shipwreck', 'seed-ocean', 'seed-outpost', 'seed-endcity', 'seed-slime', 'seed-nether',
    'seed-mansion', 'seed-fossil', 'seed-portal', 'seed-ancientcity', 'seed-trailruins',
    'seed-trialchambers', 'seed-buriedtreasure', 'seed-mineshaft', 'seed-stronghold'
  ]
  numberCheckItems.forEach(item => {
    if (data['world-settings']['default'][item] !== 'default') {
      data['world-settings']['default'][item] = Number(data['world-settings']['default'][item])
    }
  })

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
