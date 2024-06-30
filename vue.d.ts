/**
 * paper-panel
 * By:  Matthew Evans
 * See LICENSE.md
 */

declare module '*.vue' {
  const Component: any
  export default Component
}

interface UserContext {
  userid:number
  username:string
  usertype:string
}
