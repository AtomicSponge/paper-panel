/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:any) => {
  const userId = Number(pageContext.routeParams.id)

  const data = [
    {
      id: 1,
      users: [ 1, 2 ],
      name: 'some name',
      address: 'localhost',
      port: 2345
    },
    {
      id: 2,
      users: [ 1 ],
      name: 'another',
      address: '10.0.0.100',
      port: 4532
    },
    {
      id: 3,
      users: [ 2 ],
      name: 'server three',
      address: '10.10.42.200',
      port: 4532
    }
  ]

  const servers = data.map(server => {
    server.users.filter(user => user === userId)
  })

  console.log(servers)

  return {
    data
  }
}
