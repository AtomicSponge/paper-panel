/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { LowSync } from 'lowdb'
import { JSONFileSyncPreset } from 'lowdb/node'

interface Worlds {
  id:number
  users:Array<number>
  name:string
}

const lowDb:LowSync<{ worlds:Worlds[] }> = JSONFileSyncPreset<{ worlds:Worlds[] }>('db.json', {
  worlds: [],
})

export { lowDb }
export type { Worlds }
