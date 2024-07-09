/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export interface Server {
  name:string
  address:string
  port:number
  path:string
}

export const server = {
  name: 'some name',
  address: '10.1.1.20',
  port: 2345,
  path: '/path/to/server'
}
