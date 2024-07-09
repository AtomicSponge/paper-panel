/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

export interface Worlds {
  id:number
  users:Array<number>
  name:string
}

export const worlds = {
  world: [
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
