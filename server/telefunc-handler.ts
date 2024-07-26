import { telefunc } from 'telefunc'

export async function telefuncHandler<Context extends Record<string | number | symbol, unknown>>(
  request: Request,
  context?: Context,
): Promise<Response> {
  /* TEST DATA */
  const user = {
    name: 'Administrator',
    login: 'admin',
    admin: true
  }
  /* TEST DATA */

  const httpResponse = await telefunc({
    url: request.url.toString(),
    method: request.method,
    body: await request.text(),
    context: {
      ...context,
      user
    },
  })
  const { body, statusCode, contentType } = httpResponse
  return new Response(body, {
    status: statusCode,
    headers: {
      "content-type": contentType,
    },
  })
}
