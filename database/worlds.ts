/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export interface Worlds {
  id:number
  users:Array<number>
  name:string
  folder:string
}

export const worlds:{ world:Array<Worlds> } = { world: [] }
