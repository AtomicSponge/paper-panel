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
  const serverDb = await JSONFilePreset('db.json', server)
  const serverPath = serverDb.data.server.at(0)?.path

  const db = await JSONFilePreset('db.json', worlds)
  const data = db.data.worlds

  const nameRef:Array<string> = []
  const folderRef:Array<string> = []
  const worldConfig:Array<string> = []
  const netherConfig:Array<string> = []
  const theEndConfig:Array<string> = []

  if(serverPath !== undefined && existsSync(serverPath)) {
    await asyncForEach(data, async (world:World) => {
      const worldLocation = path.join(serverPath, world.folder, 'paper-world.yml')
      const netherLocation = path.join(serverPath, world.folder + '_nether', 'paper-world.yml')
      const theEndLocation = path.join(serverPath, world.folder + '_the_end', 'paper-world.yml')

      //  Track name and folder here for idx matching
      nameRef.push(world.name)
      folderRef.push(world.folder)

      //  Make sure the world exists
      if(!existsSync(path.join(serverPath, world.folder))) {
        worldConfig.push('World does not exist!')
        netherConfig.push('World does not exist!')
        theEndConfig.push('World does not exist!')
        return
      }

      //  Read each file in or create if it does not exist
      try {
        if(existsSync(worldLocation)) {
          worldConfig.push((await fs.readFile(worldLocation)).toString())
        } else {
          await (await fs.open(worldLocation, 'r+')).close()
          worldConfig.push((await fs.readFile(worldLocation)).toString())
        }
      } catch (error:any) {
        console.error(error.message)
        worldConfig.push(`Problems opening file:  ${error.message}`)
      }

      try {
        if(existsSync(netherLocation)) {
          netherConfig.push((await fs.readFile(netherLocation)).toString())
        } else {
          await (await fs.open(netherLocation, 'r+')).close()
          netherConfig.push((await fs.readFile(netherLocation)).toString())
        }
      } catch (error:any) {
        console.error(error.message)
        netherConfig.push(`Problems opening file:  ${error.message}`)
      }

      try {
        if(existsSync(theEndLocation)) {
          theEndConfig.push((await fs.readFile(theEndLocation)).toString())
        } else {
          await (await fs.open(theEndLocation, 'r+')).close()
          theEndConfig.push((await fs.readFile(theEndLocation)).toString())
        }
      } catch (error:any) {
        console.error(error.message)
        theEndConfig.push(`Problems opening file:  ${error.message}`)
      }
    })
  }

  return {
    nameRef,
    folderRef,
    worldConfig,
    netherConfig,
    theEndConfig
  }
}

export type Data = Awaited<ReturnType<typeof data>>
