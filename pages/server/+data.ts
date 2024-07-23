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

  //  Get server hostname
  const hostname = await (async () => {
    try {
      const { stdout } = await exec('hostname')
      return stdout.toString().trim()
    } catch (error:any) {
      console.error(error.message)
      return 'hostname'
    }
  })()

  //  Get the current version and build number
  const { version, build } = await (async () => {
    try {
      const { stdout } = await exec(`java -jar ${data?.filename} --version`, { cwd: data?.path })
      const version = stdout.toString().substring(stdout.indexOf('\n')).trim()
      const currentVer = version.substring(0, version.indexOf('-'))
      const build = version.substring(version.indexOf('-') + 1, version.lastIndexOf('-'))
      return { 
        version: currentVer,
        build: build
      }
    } catch (error:any) {
      console.error(error.message)
      return {
        version: '',
        build: ''
      }
    }
  })()

  let port = ''
  let serverProps = null
  let paperConfig = null
  let paperWorldDefaults = null
  let bukkitConfig = null
  let spigotConfig = null

  if (data !== undefined && existsSync(data.path)) {
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
      hostname, port, version, build
    },
    serverProps,
    paperConfig,
    paperWorldDefaults,
    bukkitConfig,
    spigotConfig
  }
}

export type Data = Awaited<ReturnType<typeof data>>
