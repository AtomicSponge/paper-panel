/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { LowSync } from 'lowdb'
import { JSONFileSyncPreset } from 'lowdb/node'

interface Users {
  id:number
  name:string
  serveradmin:boolean
  admin:boolean
}

const lowDb:LowSync<{ users:Users[] }> = JSONFileSyncPreset<{ users:Users[] }>('db.json', {
  users: [],
})

export { lowDb }
export type { Users }
