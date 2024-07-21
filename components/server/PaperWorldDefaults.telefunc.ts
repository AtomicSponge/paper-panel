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
  if (!isNaN(Number(data['fixes']['falling-block-height-nerf']))) {
    data['fixes']['falling-block-height-nerf'] = Number(data['fixes']['falling-block-height-nerf'])
  }
  if (!isNaN(Number(data['fixes']['tnt-entity-height-nerf']))) {
    data['fixes']['tnt-entity-height-nerf'] = Number(data['fixes']['tnt-entity-height-nerf'])
  }

  console.log('Saving World Defaults config...')
  console.log(data)

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (serverSettings !== undefined && fs.existsSync(serverSettings.path)) {
      if (data === undefined) throw new Error('Unable to save!  Missing data!')
      fs.writeFileSync(path.join(serverSettings.path, 'config', 'paper-world-defaults.yml'), YAML.stringify(data))
    } else {
      throw new Error('Unable to save! Cannot find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
