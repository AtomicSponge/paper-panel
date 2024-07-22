/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

//import fs from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'
import { existsSync } from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'
import { asyncForEach } from '@spongex/async-for-each'

import { server } from '@/database/server'
import { World, worlds } from '@/database/worlds'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const isAdmin = Boolean(pageContext.user?.admin) || Boolean(pageContext.user?.serveradmin)
  const userId = Number(pageContext.user?.id)

  const serverDb = await JSONFilePreset('db.json', server)
  const serverPath = serverDb.data.server.at(0)?.path

  const db = await JSONFilePreset('db.json', worlds)
  const data = isAdmin ? db.data.worlds : db.data.worlds.filter(world => world.users.includes(userId))

  let worldConfig:Array<string> = []
  let netherConfig:Array<string> = []
  let theEndConfig:Array<string> = []

  if(serverPath !== undefined && existsSync(serverPath)) {
    await asyncForEach(data, async (world:World) => {
      const worldLocation = path.join(serverPath, world.folder, 'paper-world.yml')
      const netherLocation = path.join(serverPath, world.folder + '_nether', 'paper-world.yml')
      const theEndLocation = path.join(serverPath, world.folder + '_the_end', 'paper-world.yml')

      //  Read each file in or create if it does not exist
      try {
        if(existsSync(worldLocation)) {
          worldConfig.push((await fs.readFile(worldLocation)).toString())
        } else {
          await (await fs.open(worldLocation, 'r+')).close()
          worldConfig.push((await fs.readFile(worldLocation)).toString())
        }
      } catch (error:any) {
        worldConfig.push('Problems editing file')
      }

      try {
        if(existsSync(netherLocation)) {
          netherConfig.push((await fs.readFile(netherLocation)).toString())
        } else {
          await (await fs.open(netherLocation, 'r+')).close()
          netherConfig.push((await fs.readFile(netherLocation)).toString())
        }
      } catch (error:any) {
        netherConfig.push('Problems editing file')
      }

      try {
        if(existsSync(theEndLocation)) {
          theEndConfig.push((await fs.readFile(theEndLocation)).toString())
        } else {
          await (await fs.open(theEndLocation, 'r+')).close()
          theEndConfig.push((await fs.readFile(theEndLocation)).toString())
        }
      } catch (error:any) {
        theEndConfig.push('Problems editing file')
      }
    })
  }

  return {
    worlds: data,
    worldConfig,
    netherConfig,
    theEndConfig
  }
}

export type Data = Awaited<ReturnType<typeof data>>
