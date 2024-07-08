/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export const onExport = async ():Promise<string> => {
  console.log('running export!')
  await new Promise(r => setTimeout(r, 3000))
  console.log('export simulation wait done!')
  return 'export test data'
}
