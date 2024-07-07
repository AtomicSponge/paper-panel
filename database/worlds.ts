/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

interface Worlds {
  id:number
  users:Array<number>
  name:string
}

const worlds = {
  worlds: [],
}

export { worlds }
export type { Worlds }
