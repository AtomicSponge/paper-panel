/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

import type { PageContextServer } from 'vike/types'

type Context = PageContextServer & UserContext

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext: Context) => {
  const username = pageContext.username
  return {
    username
  }
}
