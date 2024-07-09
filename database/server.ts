/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

interface Server {
  name:string
  address:string
  port:number
  path:string
}

const server = {
  name: 'some name',
  address: '10.1.1.20',
  port: 2345
}

export { server }
export type { Server }
