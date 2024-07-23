/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import path from 'node:path'
import util from 'node:util'
import { existsSync } from 'node:fs'
import { exec as execAsync } from 'node:child_process'
import { JSONFilePreset } from 'lowdb/node'

import { server } from '@/database/server'

const exec = util.promisify(execAsync)

/**
 * Run an update on paper server
 */
export const onCheckUpdate = async () => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  if(data === undefined || data === null) {
    return { errorMessage: 'Missing database settings!' }
  }

  const currentVersion = await (async () => {
    try {
      const { stdout } = await exec(
        `java -jar ${data.filename} --version`,
        { cwd: data.path, windowsHide: true }
      )
      const version = stdout.toString().substring(stdout.indexOf('\n')).trim()
      return version.substring(0, version.indexOf('-'))
    } catch (error:any) {
      return null
    }
  })()
  if(currentVersion === null) {
    return { errorMessage: 'Unable to determine current version!' }
  }

  console.log(currentVersion)

  return { status: true }
}

export const onDoUpdate = async () => {
  console.log('running update!')
  await new Promise(r => setTimeout(r, 2000))
  console.log('update simulation wait done!')

  if(false) {
    return { errorMessage: 'Update available' }
  }
}
