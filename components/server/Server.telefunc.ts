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

const paperURL = 'https://api.papermc.io/v2/projects/paper/'

/**
 * Check for Paper server updates
 */
export const onCheckUpdate = async () => {
  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  if(data === undefined || data === null) {
    return { errorMessage: 'Missing database settings!' }
  }

  //  Get the current version and build number
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
      console.error(error.message)
      return {
        currentVersion: null,
        currentBuild: null
      }
    }
  })()
  if(currentVersion === null || currentBuild === null) {
    return { errorMessage: 'Unable to determine current version!' }
  }

  console.log(currentVersion)
  console.log(currentBuild)

  //  Query Paper API for latest version and build
  const latestVersion = await (async () => {
    try {
      //
    } catch (error:any) {
      console.error(error.message)
      return null
    }
  })()

  const latestBuild = await (async () => {
    try {
      //
    } catch (error:any) {
      console.error(error.message)
      return null
    }
  })()

  if(latestVersion === null || latestBuild === null) {
    return { errorMessage: 'Unable to determine latest version!' }
  }

  /*return {
    status: false,
    message: `You are on the latest version!  ${currentVersion}-${currentBuild}`
  }*/
  return {
    status: true,
    message: `Update available!  This will restart the server!  Are you sure you want to continue?  ` +
      `Current:  ${currentVersion}-${currentBuild}  ` +
      `Latest:  ${latestVersion}-${latestBuild}`
  }
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
