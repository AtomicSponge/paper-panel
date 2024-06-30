/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { redirect } from 'vike/abort'
 
export const guard = (pageContext:PageContext) => {
  const { userid, usertype } = pageContext
  if (userid === null && usertype !== 'admin') {
    throw redirect('/')
  }
}
