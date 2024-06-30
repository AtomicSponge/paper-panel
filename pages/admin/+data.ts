/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext: PageContextServer) => {
  const username = pageContext.routeParams.username
  return {
    username
  }
}
