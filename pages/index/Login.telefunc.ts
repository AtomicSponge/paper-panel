/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export const onLogin = async ({ username, password }:{ username:string, password:string }):Promise<void> => {
  console.log(username)
  console.log(password)
}
