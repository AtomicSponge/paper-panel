/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'
import util from 'node:util'
import { exec as execAsync } from 'node:child_process'
import YAML from 'yaml'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

const exec = util.promisify(execAsync)

export const data = async () => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  const hostname = await (async () => {
    try {
      const { stdout } = await exec('hostname', { windowsHide: true })
      return stdout.toString().trim()
    } catch (error:any) {
      return 'hostname'
    }
  })()

  const version = '1.20'

  let port = ''
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
      port = <string>serverProps.match(/(?<=server-port=).*/m)?.at(0)
    } catch (error:any) {
      console.error(error.message)
    }
  }

  return {
    server: {
      hostname, port, version
    },
    serverProps,
    paperConfig,
    paperWorldDefaults,
    bukkitConfig,
    spigotConfig
  }
}

export type Data = Awaited<ReturnType<typeof data>>
