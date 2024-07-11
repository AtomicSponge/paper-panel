/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Compresses a world folder and sends for saving
 * @returns Compressed world data
 */
export const onExport = async () => {
  console.log('running export!')
  await new Promise(r => setTimeout(r, 3000))
  console.log('export simulation wait done!')
  if(false) {
    return { errorMessage: '' }
  }
  return { data: 'export test data' }
}
