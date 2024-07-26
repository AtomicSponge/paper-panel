/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import bcrypt from 'bcryptjs'

export const hashPass = async (password:string) => {
  const saltRounds = 12
  const salt = await bcrypt.genSalt(saltRounds)
  return await bcrypt.hash(password, salt)
}
