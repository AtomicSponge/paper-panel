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
  password:string
  salt:string
  serveradmin:boolean
  admin:boolean
}

const lowDb:LowSync<{ users:Users[] }> = JSONFileSyncPreset<{ users:Users[] }>('db.json', {
  users: [
    {
      id: 0,
      name: 'admin',
      password: '7d48fc1ebc7df52c32759fd620b64fe48907ebca9b3d396d61b68843a82f8b1813fa1fe27bffa6a6f075c2eebb988b948a16f721945117bd857e6fd8faa20b74',
      salt: 'changeme',
      serveradmin: true,
      admin: true
    }
  ],
})

export { lowDb }
export type { Users }
