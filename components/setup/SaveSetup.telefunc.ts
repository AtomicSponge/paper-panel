/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

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
    return { errorMessage: 'Admin passwords do not match!' }
  }

  const serverDb = await JSONFilePreset('db.json', server)
  //await serverDb.update(() => {})
  const usersDb = await JSONFilePreset('db.json', users)
  //await usersDb.update(() => {})
  const worldsDb = await JSONFilePreset('db.json', worlds)
  //await worldsDb.update(() => {})
}
