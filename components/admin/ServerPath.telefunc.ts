/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'
import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'
import { server } from '@/database/server'

export const onUpdateServerPath = async ({ path }:{ path:string }) => {
  const user = getUser()

  const db = await JSONFilePreset('db.json', server)

  if(db.data.server === undefined) return { errorMessage: 'Server data not found!' }
  if(!fs.existsSync(path)) return { errorMessage: `Unable to access path '${path}'!` }

  await db.update(({ server }) => {
    server[0].path = path
  })

  const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
  console.log(`Server path update on ${updateDate} by ${user.login}`)
}
