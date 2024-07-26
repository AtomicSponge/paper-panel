/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs, { constants } from 'node:fs'
import path from 'node:path'
import { JSONFilePreset } from 'lowdb/node'
import { getContext, Abort } from 'telefunc'

import { hashPass } from '@/auth/hashPass'

/**
 * Save first time configuration
 */
export const onSave = async ({ adminData, serverData }:{ adminData:AdminSetupData, serverData:ServerSetupData }) => {
  //  If logged in or db exists, abort
  const { user } = getContext()
  if(user || fs.existsSync(path.join(process.cwd(), 'db.json'))) {
    throw Abort()
  }

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

  const password = await hashPass(adminData.password)

  const admin = {
    id: 0,
    name: adminData.display,
    login: adminData.username,
    password: password,
    admin: true
  }

  /** Server configuration */
  if(!fs.existsSync(serverData.path)) {
    return { errorMessage: 'Unable to access path!  Does it exist?' }
  }
  try {
    fs.accessSync(serverData.path, constants.R_OK)
  } catch (error:any) {
    return { errorMessage: 'Unable to read from path!' }
  }
  try {
    fs.accessSync(serverData.path, constants.W_OK)
  } catch (error:any) {
    return { errorMessage: 'Unable to write to path!' }
  }
  if(serverData.filename.length < 5) {
    return { errorMessage: 'Enter a server filename!' }
  }
  if(!serverData.filename.endsWith('.jar')) {
    return { errorMessage: `Server filename must end with '.jar'!` }
  }

  const serverDbData = {
    path: serverData.path,
    filename: serverData.filename
  }

  /** Create initial database */
  const dbDefaultData = { server: [], users: [], worlds: [] }
  const db = await JSONFilePreset<Database>('db.json', dbDefaultData)
  await db.update(({ server }) => { server.push(serverDbData) })
  await db.update(({ users }) => { users.push(admin) })
}
