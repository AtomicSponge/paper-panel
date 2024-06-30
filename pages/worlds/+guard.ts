/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { redirect } from 'vike/abort'
 
export const guard = (pageContext:PageContext) => {
  const { userid } = pageContext
  if (userid === null) {
    throw redirect('/')
  }
}
