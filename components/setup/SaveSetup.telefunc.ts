/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'
import { users } from '@/database/users'
import { worlds } from '@/database/worlds'

/**
 * Save first time configuration
 */
export const onSave = async ({ adminData, serverConfig }:{ adminData:AdminSetupData, serverConfig:ServerSetupData }) => {
  console.log('saving initial config')
  console.log(adminData)
  console.log(serverConfig)

  if(adminData.password !== adminData.confirm) {
    return { errorMessage: 'Passwords do not match!' }
  }

  if(!fs.existsSync(serverConfig.path)) {
    return { errorMessage: 'Unable to access path!' }
  }

  return { errorMessage: 'Early stop' }

  const serverDb = await JSONFilePreset('db.json', server)
  await serverDb.update(({ server }) => { server.push({ path: serverConfig.path }) })
  const usersDb = await JSONFilePreset('db.json', users)
  //await usersDb.update(() => {})
  const worldsDb = await JSONFilePreset('db.json', worlds)
  //await worldsDb.update(() => {})
}
