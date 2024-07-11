/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'

import type { GuardAsync } from 'vike/types'
import { render } from 'vike/abort'
 
export const guard:GuardAsync = async (pageContext):ReturnType<GuardAsync> => {
  if(!fs.existsSync(path.join(process.cwd(), 'db.json'))) {
    throw render('/setup')
  }

  const { user } = pageContext
  if (user === undefined) {
    throw render('/login')
  }

  throw render('/worlds')
}
