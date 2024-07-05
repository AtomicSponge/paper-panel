/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export { guard }
 
import type { GuardAsync } from 'vike/types'
import { render } from 'vike/abort'
 
const guard:GuardAsync = async (pageContext):ReturnType<GuardAsync> => {
  const { user } = pageContext
  if (user === undefined) {
    throw render('/')
  }
  if (!user.admin) {
    throw render(404, '<h1>404 Page Not Found</h1><p>This page could not be found.</p>')
  }
}
