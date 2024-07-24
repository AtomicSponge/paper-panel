/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Update the Banned Players
 */
export const onUpdate = async ({ data }:{ data:Array<string> }) => {
  console.log('Updating banned players...')
  console.log(data)

  if(false) {
    return { errorMessage: '' }
  }
}
