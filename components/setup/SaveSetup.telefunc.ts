/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs, { constants } from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'
import bcrypt from 'bcrypt'

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

  const salt = await bcrypt.genSalt(12)
  const password = await bcrypt.hash(adminData.password, salt)

  const admin = {
    id: 0,
    name: adminData.display,
    login: adminData.username,
    password: password,
    admin: true,
    serveradmin: true
  }

  /** Server configuration */
  if(!fs.existsSync(serverConfig.path)) {
    return { errorMessage: 'Unable to access path!  Does it exist?' }
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

  const dbDefaultData = { server: [], users: [], worlds: []}

  /** Create initial database */
  const db = await JSONFilePreset<Database>('db.json', dbDefaultData)
  await db.update(({ server }) => { server.push({ path: serverConfig.path }) })
  await db.update(({ users }) => { users.push(admin) })
}
