/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import path from 'node:path'

import { getUser } from '@/auth/getUser'

export const onSave = async ({ data }:{ data:any }) => {
  const user = getUser()

  try {
    console.log('Saving server properties...')
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: error.message }
  }
}
