/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import util from 'node:util'
import { exec as execAsync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'
import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'
import { server } from '@/database/server'

const exec = util.promisify(execAsync)

/**
 * Add a user to the Operators
 */
export const onAddUser = async ({ data }:{ data:string }) => {
  const user = getUser()

  try {
    await exec(`minecraft op ${data}`)
    console.log(`User ${data} added to the Operators.`)
    const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
    console.log(`Operators updated on ${updateDate} by ${user.login}`)
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}

/**
 * Remove a user from the Operators
 */
export const onRemoveUser = async ({ data }:{ data:string }) => {
  const user = getUser()

  try {
    await exec(`minecraft deop ${data}`)
    console.log(`User ${data} removed from the Operators.`)
    const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
    console.log(`Operators updated on ${updateDate} by ${user.login}`)
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}

/**
 * Update the Operators
 */
export const onUpdate = async ({ data }:{ data:Array<Operators> }) => {
  const user = getUser()

  const db = await JSONFilePreset('db.json', server)
  const serverSettings = db.data.server.at(0)

  try {
    if (data === undefined) throw new Error('Unable to save!  Missing data!')
    if (serverSettings !== undefined && existsSync(serverSettings.path)) {
      await fs.writeFile(path.join(serverSettings.path, 'ops.json'), JSON.stringify(data))
      const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
      console.log(`Operators updated on ${updateDate} by ${user.login}`)
    } else {
      throw new Error('Unable to save!  Cannot find server path!')
    }
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
