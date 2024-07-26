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
 * Update the Whitelist
 */
export const onUpdate = async ({ data }:{ data:Array<string> }) => {
  const user = getUser()

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (data === undefined) throw new Error('Unable to save!  Missing data!')
    if (serverSettings !== undefined && existsSync(serverSettings.path)) {
      await fs.writeFile(path.join(serverSettings.path, 'whitelist.json'), JSON.stringify(data))
      const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
      console.log(`Whitelist updated on ${updateDate} by ${user.login}`)
    } else {
      throw new Error('Unable to save!  Cannot find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
