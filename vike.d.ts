declare global {
  namespace Vike {
    interface PageContext {
      user?: {
        id:number
        name:string
        admin:boolean
      }
      //Page: () => VUE.Element
    }
  }
}

export {}
