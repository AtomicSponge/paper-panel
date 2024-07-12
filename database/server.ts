/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export interface Server {
  address:string
  port:number
  path:string
}

export const server:{ server:Array<Server> } = { server: [] }
