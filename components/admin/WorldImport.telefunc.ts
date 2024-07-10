/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Scans for worlds not yet imported
 */
export const onWorldImport = async ({ file }:{ file:File }):Promise<void> => {
  console.log('Importing world...')
  console.log(file)
  await new Promise(r => setTimeout(r, 2000))
  console.log('Import sim done!')
}
