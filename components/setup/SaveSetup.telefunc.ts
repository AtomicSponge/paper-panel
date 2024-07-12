/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs, { constants } from 'node:fs'
import crypto from 'node:crypto'
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

  /** Admin configuration */
  if(adminData.password !== adminData.confirm) {
    return { errorMessage: 'Passwords do not match!' }
  }

  const salt = crypto.randomBytes(512).toString('hex')
  const password = (() => {
    return adminData.password + salt
  })()

  const admin = {
    id: 0,
    name: adminData.display,
    login: adminData.username,
    password: password,
    salt: salt,
    admin: true,
    serveradmin: true
  }

  /** Server configuration */
  if(!fs.existsSync(serverConfig.path)) {
    return { errorMessage: 'Unable to access path!' }
  }
  try {
    fs.accessSync(serverConfig.path, constants.R_OK)
  } catch (error:any) {
    return { errorMessage: 'Unable to read from path!' }
  }
  try {
    fs.accessSync(serverConfig.path, constants.W_OK)
  } catch (error:any) {
    return { errorMessage: 'Unable to write to path!' }
  }

  //return { errorMessage: 'Early stop' }

  /** Create initial database */
  const serverDb = await JSONFilePreset('db.json', server)
  await serverDb.update(({ server }) => { server.push({ path: serverConfig.path }) })
  const usersDb = await JSONFilePreset('db.json', users)
  await usersDb.update(({ users }) => { users.push(admin) })
  //const worldsDb = await JSONFilePreset('db.json', worlds)
  //await worldsDb.update(({ world }) => {})
}
