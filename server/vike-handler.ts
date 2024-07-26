/// <reference lib="webworker" />
import { renderPage } from 'vike/server'

export async function vikeHandler<
  Context extends Record<string | number | symbol, unknown>,
>(request: Request, context?: Context): Promise<Response> {
  /* TEST DATA */
  const user = {
    name: 'Administrator',
    login: 'admin',
    admin: true
  }
  /* TEST DATA */

  const pageContextInit = {
    ...context,
    urlOriginal: request.url,
    user
  }
  const pageContext = await renderPage(pageContextInit)
  const response = pageContext.httpResponse

  const { readable, writable } = new TransformStream()

  response?.pipe(writable)

  return new Response(readable, {
    status: response?.statusCode,
    headers: response?.headers,
  })
}
