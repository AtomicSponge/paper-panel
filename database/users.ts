/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export interface User {
  id:number
  name:string
  login:string
  password:string
  admin:boolean
}

export const users:{ users:Array<User> } = { users: [] }
