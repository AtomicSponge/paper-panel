/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export const onBackup = async ():Promise<string> => {
  console.log('running backup!')
  await new Promise(r => setTimeout(r, 2000))
  console.log('backup simulation wait done!')
  return 'test data'
}
