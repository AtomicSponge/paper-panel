/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:any) => {
  const username = pageContext.username

  const servers = [
    {
      name: 'some name',
      address: 'localhost',
      port: 2345
    },
    {
      name: 'another',
      address: '10.0.0.100',
      port: 4532
    },
    {
      name: 'server three',
      address: '10.10.42.200',
      port: 4532
    }
  ]

  return {
    username,
    servers
  }
}
