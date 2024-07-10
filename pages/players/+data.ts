/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  let operators = null
  let bannedIps = null
  let bannedPlayers = null
  let whitelist = null

  if(data !== undefined && fs.existsSync(data.path)) {
    try {
      operators = fs.readFileSync(path.join(data.path, 'ops.json'))
      bannedIps = fs.readFileSync(path.join(data.path, 'banned-ips.json'))
      bannedPlayers = fs.readFileSync(path.join(data.path, 'banned-players.json'))
      whitelist = fs.readFileSync(path.join(data.path, 'whitelist.json'))

      operators = JSON.parse(operators.toString())
      bannedIps = JSON.parse(bannedIps.toString())
      bannedPlayers = JSON.parse(bannedPlayers.toString())
      whitelist = JSON.parse(whitelist.toString())
    } catch (error:any) {
      throw error
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
