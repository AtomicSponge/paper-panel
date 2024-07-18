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

  if (data['world-settings']['default']['seed-village'] !== 'default') {
    data['world-settings']['default']['seed-village'] = Number(data['world-settings']['default']['seed-village'])
  }
  if (data['world-settings']['default']['seed-desert'] !== 'default') {
    data['world-settings']['default']['seed-desert'] = Number(data['world-settings']['default']['seed-desert'])
  }
  if (data['world-settings']['default']['seed-igloo'] !== 'default') {
    data['world-settings']['default']['seed-igloo'] = Number(data['world-settings']['default']['seed-igloo'])
  }
  if (data['world-settings']['default']['seed-jungle'] !== 'default') {
    data['world-settings']['default']['seed-jungle'] = Number(data['world-settings']['default']['seed-jungle'])
  }
  if (data['world-settings']['default']['seed-swamp'] !== 'default') {
    data['world-settings']['default']['seed-swamp'] = Number(data['world-settings']['default']['seed-swamp'])
  }
  if (data['world-settings']['default']['seed-monument'] !== 'default') {
    data['world-settings']['default']['seed-monument'] = Number(data['world-settings']['default']['seed-monument'])
  }
  if (data['world-settings']['default']['seed-shipwreck'] !== 'default') {
    data['world-settings']['default']['seed-shipwreck'] = Number(data['world-settings']['default']['seed-shipwreck'])
  }
  if (data['world-settings']['default']['seed-ocean'] !== 'default') {
    data['world-settings']['default']['seed-ocean'] = Number(data['world-settings']['default']['seed-ocean'])
  }
  if (data['world-settings']['default']['seed-outpost'] !== 'default') {
    data['world-settings']['default']['seed-outpost'] = Number(data['world-settings']['default']['seed-outpost'])
  }
  if (data['world-settings']['default']['seed-endcity'] !== 'default') {
    data['world-settings']['default']['seed-endcity'] = Number(data['world-settings']['default']['seed-endcity'])
  }
  if (data['world-settings']['default']['seed-slime'] !== 'default') {
    data['world-settings']['default']['seed-slime'] = Number(data['world-settings']['default']['seed-slime'])
  }
  if (data['world-settings']['default']['seed-nether'] !== 'default') {
    data['world-settings']['default']['seed-nether'] = Number(data['world-settings']['default']['seed-nether'])
  }
  if (data['world-settings']['default']['seed-mansion'] !== 'default') {
    data['world-settings']['default']['seed-mansion'] = Number(data['world-settings']['default']['seed-mansion'])
  }
  if (data['world-settings']['default']['seed-fossil'] !== 'default') {
    data['world-settings']['default']['seed-fossil'] = Number(data['world-settings']['default']['seed-fossil'])
  }
  if (data['world-settings']['default']['seed-portal'] !== 'default') {
    data['world-settings']['default']['seed-portal'] = Number(data['world-settings']['default']['seed-portal'])
  }
  if (data['world-settings']['default']['seed-ancientcity'] !== 'default') {
    data['world-settings']['default']['seed-ancientcity'] = Number(data['world-settings']['default']['seed-ancientcity'])
  }
  if (data['world-settings']['default']['seed-trailruins'] !== 'default') {
    data['world-settings']['default']['seed-trailruins'] = Number(data['world-settings']['default']['seed-trailruins'])
  }
  if (data['world-settings']['default']['seed-trialchambers'] !== 'default') {
    data['world-settings']['default']['seed-trialchambers'] = Number(data['world-settings']['default']['seed-trialchambers'])
  }
  if (data['world-settings']['default']['seed-buriedtreasure'] !== 'default') {
    data['world-settings']['default']['seed-buriedtreasure'] = Number(data['world-settings']['default']['seed-buriedtreasure'])
  }
  if (data['world-settings']['default']['seed-mineshaft'] !== 'default') {
    data['world-settings']['default']['seed-mineshaft'] = Number(data['world-settings']['default']['seed-mineshaft'])
  }
  if (data['world-settings']['default']['seed-stronghold'] !== 'default') {
    data['world-settings']['default']['seed-stronghold'] = Number(data['world-settings']['default']['seed-stronghold'])
  }

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
