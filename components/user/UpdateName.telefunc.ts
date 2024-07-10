/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { users } from '@/database/users'
import type { Users } from '@/database/users'

export const onNameUpdate = async ({ id, name }:{ id:number, name:string }):Promise<void> => {
  console.log(`Updating user name ${name}...`)

  const db = await JSONFilePreset('db.json', users)
  await db.update(({ user }) => {
    const elem = <Users>user.find(user => user.id === id)
    elem.name = name
  })
}
