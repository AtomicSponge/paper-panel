/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { __locale } from '@spongex/system-locale'

import { getUser } from '@/auth/getUser'

/**
 * Update the Whitelist
 */
export const onAddUser = async ({ data }:{ data:string }) => {
  const user = getUser()

  try {
    //
    const updateDate = new Date().toLocaleString(__locale, { timeZoneName: 'short' })
    console.log(`Whitelist updated on ${updateDate} by ${user.login}`)
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
