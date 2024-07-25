import { Server } from '@/database/server'
import { User } from '@/database/users'
import { World } from '@/database/worlds'

declare global {
  interface User {
    id:number
    name:string
    admin:boolean
    serveradmin:boolean
    login:string
    password:string
  }

  namespace Vike {
    interface PageContext {
      user?:User
    }
  }

  interface Database {
    server:Array<Server>
    users:Array<User>
    worlds:Array<World>
  }

  interface ServerSetupData {
    path:string
    filename:string
  }

  interface AdminSetupData {
    username:string
    display:string
    password:string
    confirm:string
  }
}

declare module 'telefunc' {
  namespace Telefunc {
    interface Context {
      user?:User
    }
  }
}

export {}
