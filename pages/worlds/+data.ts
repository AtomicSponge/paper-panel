/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'
import { worlds } from '@/database/worlds'

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

  if(serverPath !== undefined && fs.existsSync(serverPath)) {
    data.forEach(world => {
      const worldLocation = path.join(serverPath, world.folder, 'paper-world.yml')
      const netherLocation = path.join(serverPath, world.folder + '_nether', 'paper-world.yml')
      const theEndLocation = path.join(serverPath, world.folder + '_the_end', 'paper-world.yml')

      //  Read each file in or create if it does not exist
      try {
        if(fs.existsSync(worldLocation)) {
          worldConfig.push(fs.readFileSync(worldLocation).toString())
        } else {
          fs.closeSync(fs.openSync(worldLocation, 'r+'))
          worldConfig.push(fs.readFileSync(worldLocation).toString())
        }
      } catch (error:any) {
        worldConfig.push('Problems editing file')
      }

      try {
        if(fs.existsSync(netherLocation)) {
          netherConfig.push(fs.readFileSync(netherLocation).toString())
        } else {
          fs.closeSync(fs.openSync(netherLocation, 'r+'))
          netherConfig.push(fs.readFileSync(netherLocation).toString())
        }
      } catch (error:any) {
        netherConfig.push('Problems editing file')
      }

      try {
        if(fs.existsSync(theEndLocation)) {
          theEndConfig.push(fs.readFileSync(theEndLocation).toString())
        } else {
          fs.closeSync(fs.openSync(theEndLocation, 'r+'))
          theEndConfig.push(fs.readFileSync(theEndLocation).toString())
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
