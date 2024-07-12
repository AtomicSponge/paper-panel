/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'

export const onSave = async (data:any) => {
  try {
    console.log('Saving server properties...')
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
