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

const servers = {
  server: [],
}

export { servers }
export type { Server }
