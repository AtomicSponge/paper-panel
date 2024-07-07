declare global {
  namespace Vike {
    interface PageContext {
      user?: {
        id:number
        name:string
        admin:boolean
        serveradmin:boolean
      }
    }
  }
}

export {}
