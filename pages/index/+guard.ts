/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'

import type { GuardAsync } from 'vike/types'
import { render } from 'vike/abort'
 
export const guard:GuardAsync = async (pageContext):ReturnType<GuardAsync> => {
  if(!fs.existsSync('db.json')) {
    throw render('/setup')
  }

  const { user } = pageContext
  if (user === undefined) {
    throw render('/login')
  }
}
