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
import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'
import { server } from '@/database/server'

/**
 * Save World Defaults configuration
 */
export const onSave = async ({ data }:{ data:any }) => {
  const user = getUser()

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
  if (!isNaN(Number(data['entities']['spawning']['monster-spawn-max-light-level']))) {
    data['entities']['spawning']['monster-spawn-max-light-level'] = Number(data['entities']['spawning']['monster-spawn-max-light-level'])
  }
  if (!isNaN(Number(data['entities']['spawning']['non-player-arrow-despawn-rate']))) {
    data['entities']['spawning']['non-player-arrow-despawn-rate'] = Number(data['entities']['spawning']['non-player-arrow-despawn-rate'])
  }
  if (!isNaN(Number(data['entities']['spawning']['skeleton-horse-thunder-spawn-chance']))) {
    data['entities']['spawning']['skeleton-horse-thunder-spawn-chance'] = Number(data['entities']['spawning']['skeleton-horse-thunder-spawn-chance'])
  }
  if (!isNaN(Number(data['entities']['spawning']['wateranimal-spawn-height']['maximum']))) {
    data['entities']['spawning']['wateranimal-spawn-height']['maximum'] = Number(data['entities']['spawning']['wateranimal-spawn-height']['maximum'])
  }
  if (!isNaN(Number(data['entities']['spawning']['wateranimal-spawn-height']['minimum']))) {
    data['entities']['spawning']['wateranimal-spawn-height']['minimum'] = Number(data['entities']['spawning']['wateranimal-spawn-height']['minimum'])
  }
  if (!isNaN(Number(data['entities']['tracking-range-y']['animal']))) {
    data['entities']['tracking-range-y']['animal'] = Number(data['entities']['tracking-range-y']['animal'])
  }
  if (!isNaN(Number(data['entities']['tracking-range-y']['display']))) {
    data['entities']['tracking-range-y']['display'] = Number(data['entities']['tracking-range-y']['display'])
  }
  if (!isNaN(Number(data['entities']['tracking-range-y']['misc']))) {
    data['entities']['tracking-range-y']['misc'] = Number(data['entities']['tracking-range-y']['misc'])
  }
  if (!isNaN(Number(data['entities']['tracking-range-y']['monster']))) {
    data['entities']['tracking-range-y']['monster'] = Number(data['entities']['tracking-range-y']['monster'])
  }
  if (!isNaN(Number(data['entities']['tracking-range-y']['other']))) {
    data['entities']['tracking-range-y']['other'] = Number(data['entities']['tracking-range-y']['other'])
  }
  if (!isNaN(Number(data['entities']['tracking-range-y']['player']))) {
    data['entities']['tracking-range-y']['player'] = Number(data['entities']['tracking-range-y']['player'])
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
      const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
      console.log(`Paper World Defaults updated on ${updateDate} by ${user.login}`)
    } else {
      throw new Error('Unable to save! Cannot find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
