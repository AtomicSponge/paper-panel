/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export const data = async (pageContext:PageContextServer) => {
  //const userId = Number(pageContext.routeParams.id)

  const server = {
    users: [ 1, 2 ],
    name: 'some name',
    address: '10.1.1.20',
    port: 2345
  }

  return {
    server
  }
}

export type Data = Awaited<ReturnType<typeof data>>
