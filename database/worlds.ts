/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

interface Worlds {
  id:number
  users:Array<number>
  name:string
}

const worlds = {
  worlds: [
    {
      id: 1,
      users: [ 1, 2 ],
      name: 'Worldname Here'
    },
    {
      id: 2,
      users: [ 1 ],
      name: 'Another'
    },
    {
      id: 3,
      users: [ 2 ],
      name: 'This Land'
    }
  ],
}

export { worlds }
export type { Worlds }
