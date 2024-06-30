import { redirect } from 'vike/abort'
 
export const guard = (pageContext:any) => {
  const { userid } = pageContext
  if (userid === null) {
    throw redirect('/login')
  }
}
