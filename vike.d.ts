import { Server } from '@/database/server'
import { User } from '@/database/users'
import { World } from '@/database/worlds'

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

  interface Database {
    server:Array<Server>
    users:Array<User>
    worlds:Array<World>
  }

  interface AdminSetupData {
    username:string
    display:string
    password:string
    confirm:string
  }
}

export {}
