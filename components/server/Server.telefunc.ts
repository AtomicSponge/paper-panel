/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Run an update on paper server
 */
export const onUpdate = async () => {
  console.log('running update!')
  await new Promise(r => setTimeout(r, 2000))
  console.log('update simulation wait done!')
  if(false) {
    return { errorMessage: '' }
  }
}
