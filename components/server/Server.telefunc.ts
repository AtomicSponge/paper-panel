/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import util from 'node:util'
import { exec as execAsync } from 'node:child_process'
import semver from 'semver'
import { JSONFilePreset } from 'lowdb/node'

import { getUser } from '@/auth/getUser'
import { server } from '@/database/server'

const exec = util.promisify(execAsync)

/** Paper download location */
const paperURL = 'https://api.papermc.io/v2/projects/paper/'

/**
 * Check for Paper server build updates
 */
export const onCheckBuild = async () => {
  const user = getUser()

  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  if (data === undefined || data === null) {
    return { errorMessage: 'Missing database settings!' }
  }

  //  Get the current version and build number
  const { currentVersion, currentBuild } = await (async () => {
    try {
      const { stdout } = await exec(`java -jar ${data.filename} --version`, { cwd: data.path })
      const version = stdout.toString().substring(stdout.indexOf('\n')).trim()
      const currentVer = version.substring(0, version.indexOf('-'))
      const build = version.substring(version.indexOf('-') + 1, version.lastIndexOf('-'))
      return { 
        currentVersion: currentVer,
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
  if (currentVersion === null || currentBuild === null) {
    return { errorMessage: 'Unable to determine current version!' }
  }

  //  Query Paper API and get latest build
  const latestBuild = await (async () => {
    try {
      const res = await fetch(`${paperURL}versions/${currentVersion}`)
      const json = await res.json()
      return json['builds'].at(-1)
    } catch (error:any) {
      console.error(error.message)
      return null
    }
  })()

  //  Compare versions
  if (Number(currentBuild) >= Number(latestBuild)) {
    return {
      status: false,
      message: `You are on the latest version!  ${currentVersion}-${currentBuild}`
    }
  }

  return {
    status: true,
    version: currentVersion,
    build: latestBuild,
    message: `Update available!  This will restart the server!  Are you sure you want to continue?  ` +
      `Current:  ${currentVersion}-${currentBuild}  ` +
      `Latest:  ${currentVersion}-${latestBuild}`
  }
}

/**
 * Check for Paper server updates
 */
export const onCheckUpdate = async () => {
  const user = getUser()

  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  if (data === undefined || data === null) {
    return { errorMessage: 'Missing database settings!' }
  }

  //  Get the current version and build number
  const { currentVersion, currentBuild } = await (async () => {
    try {
      const { stdout } = await exec(`java -jar ${data.filename} --version`, { cwd: data.path })
      const version = stdout.toString().substring(stdout.indexOf('\n')).trim()
      const currentVer = version.substring(0, version.indexOf('-'))
      const build = version.substring(version.indexOf('-') + 1, version.lastIndexOf('-'))
      return { 
        currentVersion: currentVer,
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
  if (currentVersion === null || currentBuild === null) {
    return { errorMessage: 'Unable to determine current version!' }
  }

  //  Query Paper API for latest version and build
  const latestVersion = await (async () => {
    try {
      const res = await fetch(paperURL)
      const json = await res.json()
      return json['versions'].at(-1)
    } catch (error:any) {
      console.error(error.message)
      return null
    }
  })()
  const latestBuild = await (async () => {
    try {
      const res = await fetch(`${paperURL}versions/${latestVersion}`)
      const json = await res.json()
      return json['builds'].at(-1)
    } catch (error:any) {
      console.error(error.message)
      return null
    }
  })()
  if (latestVersion === null || latestBuild === null) {
    return { errorMessage: 'Unable to determine latest version!' }
  }

  //  Version number fixes for semver comparison
  let curVerCom = currentVersion
  if (currentVersion.split('.').length < 3) {
    curVerCom += '.0'  //  format 0.0.0
  }
  let latVerCom = latestVersion
  if (latestVersion.split('.').length < 3) {
    latVerCom += '.0'  //  format 0.0.0
  }

  //  Compare versions
  if (semver.gt(curVerCom, latVerCom) || semver.eq(curVerCom, latVerCom)) {
    if (Number(currentBuild) >= Number(latestBuild)) {
      return {
        status: false,
        message: `You are on the latest version!  ${currentVersion}-${currentBuild}`
      }
    }
  }

  return {
    status: true,
    version: latestVersion,
    build: latestBuild,
    message: `Update available!  This will restart the server!  Are you sure you want to continue?  ` +
      `Current:  ${currentVersion}-${currentBuild}  ` +
      `Latest:  ${latestVersion}-${latestBuild}`
  }
}

/**
 * Update the Paper server
 */
export const onDoUpdate = async ({ version, build }:{ version:string, build:string }) => {
  const user = getUser()

  const db = await JSONFilePreset('db.json', server)
  const data = db.data.server.at(0)

  if (data === undefined || data === null) {
    return { errorMessage: 'Missing database settings!' }
  }

  //  Stop server
  try {
    //await exec('systemctl stop minecraft')
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: 'Unable to stop the server!' }
  }

  //  Download latest release
  const filename = await (async () => {
    try {
      const res = await fetch(`${paperURL}versions/${version}/builds/${build}/`)
      const json = await res.json()
      return json['downloads']['application']['name']
    } catch (error:any) {
      console.error(error.message)
      return null
    }
  })()
  if (filename === null) {
    return { errorMessage: 'Unable to fetch filename of release!' }
  }

  try {
    const run = `wget ${paperURL}versions/${version}/builds/${build}/downloads/${filename}`
    await exec(run, { cwd: data.path })
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: 'Unable to download the server file!' }
  }

  //  Perform file rename & replace
  try {
    await exec(`rm ${data.filename}`, { cwd: data.path })
    await exec(`mv ${filename} ${data.filename}`, { cwd: data.path })
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: 'Error completing the update!' }
  }

  //  Start server
  try {
    //await exec('systemctl start minecraft')
  } catch (error:any) {
    console.error(error.message)
    return { errorMessage: 'Unable to resart the server!' }
  }

  return { status: true }
}
