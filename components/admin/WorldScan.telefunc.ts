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
export const onScan = async () => {
  const user = getUser()

  console.log('Scanning for worlds...')
  if(false) {
    return { errorMessage: '' }
  }

  const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
  console.log(`Worlds imported on ${updateDate} by ${user.login}`)
}
