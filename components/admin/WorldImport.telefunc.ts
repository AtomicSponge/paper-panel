/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Scans for worlds not yet imported
 */
export const onWorldImport = async ():Promise<void> => {
  console.log('Importing world...')
  await new Promise(r => setTimeout(r, 2000))
  console.log('Import sim done!')
}
