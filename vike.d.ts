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

  interface AdminSetupData {
    username:string
    display:string
    password:string
    confirm:string
  }

  interface ServerSetupData {
    path:string
  }
}

export {}
