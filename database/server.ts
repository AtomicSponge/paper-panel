/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { LowSync } from 'lowdb'
import { JSONFileSyncPreset } from 'lowdb/node'

interface Server {
  name:string
}

const lowDb:LowSync<{ server:Server[] }> = JSONFileSyncPreset<{ server:Server[] }>('db.json', {
  server: [],
})

export { lowDb }
export type { Server }
