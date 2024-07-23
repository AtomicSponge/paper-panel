/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export interface Server {
  path:string
  filename:string
}

export const server:{ server:Array<Server> } = { server: [] }
