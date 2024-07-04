/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export { guard }
 
import type { GuardAsync } from 'vike/types'
import { redirect } from 'vike/abort'
 
const guard:GuardAsync = async (pageContext):ReturnType<GuardAsync> => {
  const { user } = pageContext
  console.log(user)
  if (user === undefined || !user.admin) {
    throw redirect('/')
  }
}
