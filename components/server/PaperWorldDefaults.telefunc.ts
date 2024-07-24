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
 * Save World Defaults configuration
 */
export const onSave = async (data:any) => {
  if (typeof data['anticheat']['anti-xray']['hidden-blocks'] === 'string') {
    data['anticheat']['anti-xray']['hidden-blocks'] =
      data['anticheat']['anti-xray']['hidden-blocks'].replace(/(\r\n|\n|\r)/gm, '').split(',')
  }
  if (typeof data['anticheat']['anti-xray']['replacement-blocks'] === 'string') {
    data['anticheat']['anti-xray']['replacement-blocks'] =
      data['anticheat']['anti-xray']['replacement-blocks'].replace(/(\r\n|\n|\r)/gm, '').split(',')
  }

  if (!isNaN(Number(data['chunks']['auto-save-interval']))) {
    data['chunks']['auto-save-interval'] = Number(data['chunks']['auto-save-interval'])
  }
  if (!isNaN(Number(data['entities']['behavior']['zombie-villager-infection-chance']))) {
    data['entities']['behavior']['zombie-villager-infection-chance'] = Number(data['entities']['behavior']['zombie-villager-infection-chance'])
  }
  if (!isNaN(Number(data['entities']['sniffer']['boosted-hatch-time']))) {
    data['entities']['sniffer']['boosted-hatch-time'] = Number(data['entities']['sniffer']['boosted-hatch-time'])
  }
  if (!isNaN(Number(data['entities']['sniffer']['hatch-time']))) {
    data['entities']['sniffer']['hatch-time'] = Number(data['entities']['sniffer']['hatch-time'])
  }
  if (!isNaN(Number(data['entities']['spawning']['creative-arrow-despawn-rate']))) {
    data['entities']['spawning']['creative-arrow-despawn-rate'] = Number(data['entities']['spawning']['creative-arrow-despawn-rate'])
  }
  if (!isNaN(Number(data['environment']['nether-ceiling-void-damage-height']))) {
    data['environment']['nether-ceiling-void-damage-height'] = Number(data['nether-ceiling-void-damage-height']['auto-save-interval'])
  }
  if (!isNaN(Number(data['fixes']['falling-block-height-nerf']))) {
    data['fixes']['falling-block-height-nerf'] = Number(data['fixes']['falling-block-height-nerf'])
  }
  if (!isNaN(Number(data['fixes']['tnt-entity-height-nerf']))) {
    data['fixes']['tnt-entity-height-nerf'] = Number(data['fixes']['tnt-entity-height-nerf'])
  }

  if (data['environment']['treasure-maps']['find-already-discovered']['loot-tables'] === 'false') {
    data['environment']['treasure-maps']['find-already-discovered']['loot-tables'] = false
  }

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (data === undefined) throw new Error('Unable to save!  Missing data!')
    if (serverSettings !== undefined && existsSync(serverSettings.path)) {
      await fs.writeFile(path.join(serverSettings.path, 'config', 'paper-world-defaults.yml'), YAML.stringify(data))
    } else {
      throw new Error('Unable to save! Cannot find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
