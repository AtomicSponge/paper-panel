
export async function data(pageContext:any) {
  // Common built-in properties
  pageContext.urlParsed.pathname // /product/42
  pageContext.routeParams.id // 42
  pageContext.headers // { cookie: 'user-id=1337', ... }
  // Common custom properties
  pageContext.user // { name: 'John', id: 1337 }
  pageContext.initialStoreState // { time: 1718872184291 }
}
