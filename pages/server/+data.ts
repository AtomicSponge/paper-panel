/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:PageContextServer) => {
  //const userId = Number(pageContext.routeParams.id)

  const server = {
    id: 1,
    users: [ 1, 2 ],
    name: 'some name',
    address: '10.1.1.20',
    port: 2345
  }

  return {
    server
  }
}
