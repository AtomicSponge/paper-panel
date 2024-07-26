/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { getContext, Abort } from 'telefunc'
 
/** Gets the user from telefunc context */
export const getUser = () => {
  const { user } = getContext()
  if (!user) {
    throw Abort({ notLoggedIn: true })
  }
  return user
}
