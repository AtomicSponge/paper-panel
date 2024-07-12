/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import YAML from 'yaml'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

export const data = async () => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  const hostname = (() => {
    try {
      return execSync('hostname').toString().trim()
    } catch (error:any) {
      return 'null'
    }
  })()

  let port = null
  let serverProps = null
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

      serverProps = fs.readFileSync(path.join(data.path, 'server.properties')).toString()
      port = serverProps.match(/(?<=server-port=).*/gm)?.at(0)
    } catch (error:any) {
      console.error(error.message)
    }
  }

  return {
    server: {
      hostname, port
    },
    serverProps,
    paperConfig,
    paperWorldDefaults,
    bukkitConfig,
    spigotConfig
  }
}

export type Data = Awaited<ReturnType<typeof data>>
