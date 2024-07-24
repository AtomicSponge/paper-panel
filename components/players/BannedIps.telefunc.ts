/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Update the Banned IPs
 */
export const onUpdate = async ({ data }:{ data:Array<string> }) => {
  console.log('Updating banned IPs...')
  console.log(data)

  if(false) {
    return { errorMessage: '' }
  }
}
