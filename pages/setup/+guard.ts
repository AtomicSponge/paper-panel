/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'

import type { GuardAsync } from 'vike/types'
import { redirect } from 'vike/abort'
 
export const guard:GuardAsync = async ():ReturnType<GuardAsync> => {
  if(fs.existsSync(path.join(process.cwd(), 'db.json'))) {
    throw redirect('/')
  }
}
