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

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  let paperConfig = null
  let paperWorldDefaults = null
  let bukkitConfig = null
  let spigotConfig = null

  if(data !== undefined && fs.existsSync(data.path)) {
    try {
      paperConfig = fs.readFileSync(path.join(data.path, 'config', 'paper-global.yml'))
      paperWorldDefaults = fs.readFileSync(path.join(data.path, 'config', 'paper-world-defaults.yml'))
      bukkitConfig = fs.readFileSync(path.join(data.path, 'bukkit.yml'))
      spigotConfig = fs.readFileSync(path.join(data.path, 'spigot.yml'))

      paperConfig = YAML.parse(paperConfig.toString())
      paperWorldDefaults = YAML.parse(paperWorldDefaults.toString())
      bukkitConfig = YAML.parse(bukkitConfig.toString())
      spigotConfig = YAML.parse(spigotConfig.toString())
    } catch (error:any) {
      throw error
    }
  }

  return {
    server: data,
    paperConfig,
    paperWorldDefaults,
    bukkitConfig,
    spigotConfig
  }
}

export type Data = Awaited<ReturnType<typeof data>>
