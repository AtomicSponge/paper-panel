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
      server: 1,
      name: 'Worldname Here'
    },
    {
      id: 2,
      server: 1,
      name: 'Another'
    },
    {
      id: 3,
      server: 1,
      name: 'This Land'
    },
    {
      id: 1,
      server: 2,
      name: 'Worldname Here'
    },
    {
      id: 2,
      server: 2,
      name: 'Another'
    },
    {
      id: 3,
      server: 2,
      name: 'This Land'
    },
    {
      id: 1,
      server: 3,
      name: 'Worldname Here'
    },
    {
      id: 2,
      server: 3,
      name: 'Another'
    },
    {
      id: 3,
      server: 3,
      name: 'This Land'
    }
  ]

  return {
    worlds
  }
}
