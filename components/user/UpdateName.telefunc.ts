/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export const onNameUpdate = async ({ id, username }:{ id:number, username:string }):Promise<void> => {
  console.log(`Updating user name ${username}...`)
}
