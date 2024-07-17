/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'

/**
 * Resets paper-panel settings
 */
export const onResetSettings = async () => {
  try {
    fs.unlinkSync(path.join(process.cwd(), 'db.json'))
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
