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

import { server } from '@/database/server'

/**
 * Save Bukkit configuration
 */
export const onSave = async (data:any) => {
  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (serverSettings !== undefined && existsSync(serverSettings.path)) {
      if (data === undefined) throw new Error('Unable to save!  Missing data!')
      await fs.writeFile(path.join(serverSettings.path, 'bukkit.yml'), YAML.stringify(data))
      const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
      console.log(`Bukkit Configuration updated on ${updateDate}`)
    } else {
      throw new Error('Unable to save!  Cannot find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
