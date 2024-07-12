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
  salt:string
  admin:boolean
  serveradmin:boolean
}

export const users:{ user:Array<User> } = { user: [] }
