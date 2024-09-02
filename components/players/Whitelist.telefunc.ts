/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import util from 'node:util'
import { exec as execAsync } from 'node:child_process'
import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'

const exec = util.promisify(execAsync)

/**
 * Update the Whitelist
 */
export const onAddUser = async ({ data }:{ data:string }) => {
  const user = getUser()

  try {
    await exec(`minecraft whitelist add ${data}`)
    const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
    console.log(`Whitelist updated on ${updateDate} by ${user.login}`)
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
