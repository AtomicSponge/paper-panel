/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'

/**
 * Scans for worlds not yet imported
 */
export const onWorldImport = async ({ file }:{ file:File }) => {
  const user = getUser()

  console.log('Importing world...')
  console.log(file)
  await new Promise(r => setTimeout(r, 2000))
  console.log('Import sim done!')
  if(false) {
    return { errorMessage: '' }
  }

  const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
  console.log(`World imported on ${updateDate} by ${user.login}`)
}
