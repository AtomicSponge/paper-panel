/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { GuardAsync } from 'vike/types'
import { render } from 'vike/abort'
 
export const guard:GuardAsync = async (pageContext):ReturnType<GuardAsync> => {
  const { user } = pageContext
  if (user === undefined) {
    throw render('/login')
  }
}
