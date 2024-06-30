import { render, redirect } from 'vike/abort'
 
export const guard = (pageContext:any) => {
  const { user } = pageContext
  if (user === null) {
    throw redirect('/login')
  }
}
