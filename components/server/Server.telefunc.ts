/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export const onUpdate = async ():Promise<void> => {
  console.log('running update!')
  await new Promise(r => setTimeout(r, 2000))
  console.log('update simulation wait done!')
}
