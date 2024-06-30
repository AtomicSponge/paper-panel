/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:any) => {
  const username = pageContext.username
  return {
    username
  }
}
