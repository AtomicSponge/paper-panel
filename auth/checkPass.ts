/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import bcrypt from 'bcryptjs'

/**
 * Check a password against a hash from the DB
 * @param password Password to check
 * @param hash Hash from DB to check against
 * @returns True if match, else false
 */
export const checkPass = async (password:string, hash:string) => {
  const saltRounds = 12
  const salt = await bcrypt.genSalt(saltRounds)
  return await bcrypt.compare(hash, await bcrypt.hash(password, salt))
}
