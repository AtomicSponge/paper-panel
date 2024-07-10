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
export const onNameUpdate = async ({ id, name }:{ id:number, name:string }):Promise<void> => {
  const db = await JSONFilePreset('db.json', users)
  await db.update(({ user }) => {
    const elem = user.find(user => user.id === id)
    if(elem !== undefined) elem.name = name
    else throw Error('User data not found!')
  })
}
