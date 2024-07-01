/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export { data }
export type Data = Awaited<ReturnType<typeof data>>

const data = async (pageContext:any) => {

  const worlds = [
    {
      id: 1,
      name: 'Worldname Here'
    },
    {
      id: 2,
      name: 'Another'
    },
    {
      id: 3,
      name: 'This Land'
    }
  ]

  return {
    worlds
  }
}
