/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import { server } from '@/database/server'

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  //const userId = Number(pageContext.routeParams.id)

  return {
    server
  }
}

export type Data = Awaited<ReturnType<typeof data>>
