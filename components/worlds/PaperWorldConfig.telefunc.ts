/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'
import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'
import { server } from '@/database/server'

/**
 * Save per world configuration
 */
export const onSave = async ({ folder, data }:{ folder:string, data:string }) => {
  const user = getUser()

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (serverSettings !== undefined && existsSync(path.join(serverSettings.path, folder))) {
      if (data === undefined) throw new Error('Unable to save!  Missing data!')
      await fs.writeFile(path.join(serverSettings.path, folder, 'paper-world.yml'), data)
      const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
      console.log(`World Settings for ${folder} updated on ${updateDate} by ${user.login}`)
    } else {
      throw new Error('Unable to save!  Cannot find world path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
