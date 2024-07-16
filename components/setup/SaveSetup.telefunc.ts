/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs, { constants } from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'
import bcrypt from 'bcryptjs'

/**
 * Save first time configuration
 */
export const onSave = async ({ adminData, paperPath }:{ adminData:AdminSetupData, paperPath:string }) => {
  /** Admin configuration */
  if(adminData.password.toLowerCase().includes('password')) {
    return { errorMessage: `Password should not contain the word 'password'!` }
  }
  if(adminData.password.toLowerCase().includes(adminData.username)) {
    return { errorMessage: 'Password should not contain the username!' }
  }
  if(adminData.password.toLowerCase().includes('admin')) {
    return { errorMessage: `Password should not contain the word 'admin'!` }
  }
  if(adminData.password.toLowerCase().includes('administrator')) {
    return { errorMessage: `Password should not contain the word 'administrator'!` }
  }
  if(adminData.password.length > 18 || adminData.password.length < 6) {
    return { errorMessage: 'Password needs to be between 6 and 18 charecters!' }
  }
  if(adminData.password !== adminData.confirm) {
    return { errorMessage: 'Passwords do not match!' }
  }

  const saltRounds = 12
  const salt = await bcrypt.genSalt(saltRounds)
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
  if(!fs.existsSync(paperPath)) {
    return { errorMessage: 'Unable to access path!  Does it exist?' }
  }
  try {
    fs.accessSync(paperPath, constants.R_OK)
  } catch (error:any) {
    return { errorMessage: 'Unable to read from path!' }
  }
  try {
    fs.accessSync(paperPath, constants.W_OK)
  } catch (error:any) {
    return { errorMessage: 'Unable to write to path!' }
  }

  /** Create initial database */
  const dbDefaultData = { server: [], users: [], worlds: [] }
  const db = await JSONFilePreset<Database>('db.json', dbDefaultData)
  await db.update(({ server }) => { server.push({ path: paperPath }) })
  await db.update(({ users }) => { users.push(admin) })
}
