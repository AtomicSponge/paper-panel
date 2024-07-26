/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Compresses a world folder and sends for saving
 * @returns Compressed world data
 */

import { getUser } from '@/auth/getUser'

export const onExport = async () => {
  const user = getUser()

  console.log('running export!')
  await new Promise(r => setTimeout(r, 3000))
  console.log('export simulation wait done!')
  if(false) {
    return { errorMessage: '' }
  }
  return { data: 'export test data' }
}
