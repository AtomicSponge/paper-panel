/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'
import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'

/**
 * Resets paper-panel settings
 */
export const onResetSettings = async () => {
  const user = getUser()

  try {
    fs.unlinkSync(path.join(process.cwd(), 'db.json'))
    const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
    console.log(`Paper Panel settings full reset on ${updateDate} by ${user.login}`)
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
