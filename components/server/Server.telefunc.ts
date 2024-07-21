/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Run an update on paper server
 */
export const onCheckUpdate = async () => {
  console.log('checking for update!')
  await new Promise(r => setTimeout(r, 2000))
  console.log('update check simulation wait done!')

  if(false) {
    return { errorMessage: 'Update available' }
  }

  return { status: true }
}

export const onDoUpdate = async () => {
  console.log('running update!')
  await new Promise(r => setTimeout(r, 2000))
  console.log('update simulation wait done!')

  if(false) {
    return { errorMessage: 'Update available' }
  }
}
