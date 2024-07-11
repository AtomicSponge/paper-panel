/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { JSONFilePreset } from 'lowdb/node'

import { users } from '@/database/users'

/**
 * Updates a user's display name
 * @param id User ID
 * @param name Name to update to
 */
export const onNameUpdate = async ({ id, name }:{ id:number, name:string }) => {
  const db = await JSONFilePreset('db.json', users)
  const elem = db.data.user.find(user => user.id === id)
  if(elem === undefined) return { errorMessage: 'User not found!' }
  await db.update(() => { elem.name = name })
}
