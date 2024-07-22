/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

export const data = async () => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  let operators = null
  let bannedIps = null
  let bannedPlayers = null
  let whitelist = null

  if(data !== undefined && existsSync(data.path)) {
    try {
      {const file = await fs.open(path.join(data.path, 'ops.json'))
      operators = JSON.parse((await file.readFile()).toString())
      await file.close()}
      {const file = await fs.open(path.join(data.path, 'banned-ips.json'))
      bannedIps = JSON.parse((await file.readFile()).toString())
      await file.close()}
      {const file = await fs.open(path.join(data.path, 'banned-players.json'))
      bannedPlayers = JSON.parse((await file.readFile()).toString())
      await file.close()}
      {const file = await fs.open(path.join(data.path, 'whitelist.json'))
      whitelist = JSON.parse((await file.readFile()).toString())
      await file.close()}
    } catch (error:any) {
      console.error(error.message)
    }
  }

  return {
    operators,
    bannedIps,
    bannedPlayers,
    whitelist
  }
}

export type Data = Awaited<ReturnType<typeof data>>
