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
 * Check for Paper server updates
 */
export const onCheckUpdate = async () => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  if(data === undefined || data === null) {
    return { errorMessage: 'Missing database settings!' }
  }

  const { currentVersion, currentBuild } = await (async () => {
    try {
      const { stdout } = await exec(
        `java -jar ${data.filename} --version`,
        { cwd: data.path, windowsHide: true }
      )
      const version = stdout.toString().substring(stdout.indexOf('\n')).trim()
      const build = version.substring(version.indexOf('-') + 1, version.lastIndexOf('-'))
      return { 
        currentVersion: version.substring(0, version.indexOf('-')),
        currentBuild: build
      }
    } catch (error:any) {
      return {
        currentVersion: null,
        currentBuild: null
      }
    }
  })()
  if(currentVersion === null) {
    return { errorMessage: 'Unable to determine current version!' }
  }

  console.log(currentVersion)
  console.log(currentBuild)

  return { status: true }
}

/**
 * Update the paper server
 */
export const onDoUpdate = async () => {
  console.log('running update!')
  await new Promise(r => setTimeout(r, 2000))
  console.log('update simulation wait done!')

  if(false) {
    return { errorMessage: 'Update available' }
  }
}
