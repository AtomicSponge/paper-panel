/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  const username = pageContext.routeParams.id
  return {
    username
  }
}

export type Data = Awaited<ReturnType<typeof data>>
