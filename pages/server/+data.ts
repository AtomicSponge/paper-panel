/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs, { existsSync } from 'node:fs'
import path from 'node:path'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  let paperConfig = null
  let paperWorldDefaults = null
  let bukkitConfig = null
  let spigotConfig = null
  let operators = null
  let bannedIps = null
  let bannedPlayers = null
  let whitelist = null

  if(data !== undefined && fs.existsSync(data.path)) {
    try {
      paperConfig = fs.readFileSync(path.join(data.path, 'config', 'paper-global.yml'))
      paperWorldDefaults = fs.readFileSync(path.join(data.path, 'config', 'paper-world-defaults.yml'))

      bukkitConfig = fs.readFileSync(path.join(data.path, 'bukkit.yml'))
      spigotConfig = fs.readFileSync(path.join(data.path, 'spigot.yml'))
      operators = fs.readFileSync(path.join(data.path, 'ops.json'))
      bannedIps = fs.readFileSync(path.join(data.path, 'banned-ips.json'))
      bannedPlayers = fs.readFileSync(path.join(data.path, 'banned-players.json'))
      whitelist = fs.readFileSync(path.join(data.path, 'whitelist.json'))
    } catch (error:any) {
      throw error
    }
  }

  return {
    server: data
  }
}

export type Data = Awaited<ReturnType<typeof data>>
