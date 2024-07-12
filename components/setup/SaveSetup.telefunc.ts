/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import fs from 'node:fs'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'
import { users } from '@/database/users'
import { worlds } from '@/database/worlds'

/**
 * Save first time configuration
 */
export const onSave = async ({ adminData, serverConfig }:{ adminData:AdminSetupData, serverConfig:ServerSetupData }) => {
  /**
   * Check access permissions
   * @param file File or folder to check
   * @param mask Permissions (decimal value) to check
   * @param cb Callback function
   */
  const checkPermissions = (file:string, mask:number, cb:Function) => {
    fs.stat(file, (error, stats) => {
      if (error) {
        cb(error, false)
      } else {
        cb(null, !!(mask & parseInt ((stats.mode & parseInt ("777", 8)).toString (8)[0])))
      }
    })
  }

  console.log('saving initial config')
  console.log(adminData)
  console.log(serverConfig)

  if(adminData.password !== adminData.confirm) {
    return { errorMessage: 'Passwords do not match!' }
  }

  if(!fs.existsSync(serverConfig.path)) {
    return { errorMessage: 'Unable to access path!' }
  }
  checkPermissions(serverConfig.path, 4, (error:any) => {
    if (error) return { errorMessage: 'Unable to read path!' }
  })
  checkPermissions(serverConfig.path, 2, (error:any) => {
    if (error) return { errorMessage: 'Unable to write path!' }
  })

  return { errorMessage: 'Early stop' }

  const serverDb = await JSONFilePreset('db.json', server)
  await serverDb.update(({ server }) => { server.push({ path: serverConfig.path }) })
  const usersDb = await JSONFilePreset('db.json', users)
  //await usersDb.update(() => {})
  const worldsDb = await JSONFilePreset('db.json', worlds)
  //await worldsDb.update(() => {})
}
