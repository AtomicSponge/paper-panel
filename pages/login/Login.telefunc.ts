/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

/**
 * Handle a login request
 * @param username Username
 * @param password Password
 */
export const onLogin = async ({ username, password }:{ username:string, password:string }):Promise<void> => {
  console.log(username)
  console.log(password)
}