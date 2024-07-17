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
      worldConfig.push(fs.readFileSync(path.join(serverPath, world.folder, 'paper-world.yml')).toString())
      netherConfig.push(fs.readFileSync(path.join(serverPath, world.folder + '_nether', 'paper-world.yml')).toString())
      theEndConfig.push(fs.readFileSync(path.join(serverPath, world.folder + '_the_end', 'paper-world.yml')).toString())
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
