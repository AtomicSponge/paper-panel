/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import util from 'node:util'
import { existsSync } from 'node:fs'
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
      const { stdout } = await exec('hostname')
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

  if(data !== undefined && existsSync(data.path)) {
    try {
      {const file = await fs.open(path.join(data.path, 'config', 'paper-global.yml'))
      paperConfig = YAML.parse((await file.readFile()).toString())
      await file.close()}
      {const file = await fs.open(path.join(data.path, 'config', 'paper-world-defaults.yml'))
      paperWorldDefaults = YAML.parse((await file.readFile()).toString())
      await file.close()}
      {const file = await fs.open(path.join(data.path, 'bukkit.yml'))
      bukkitConfig = YAML.parse((await file.readFile()).toString())
      await file.close()}
      {const file = await fs.open(path.join(data.path, 'spigot.yml'))
      spigotConfig = YAML.parse((await file.readFile()).toString())
      await file.close()}

      {const file = await fs.open(path.join(data.path, 'server.properties'))
      serverProps = (await file.readFile()).toString()
      await file.close()}
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
