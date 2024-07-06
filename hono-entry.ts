import {
  authjsHandler,
  authjsSessionMiddleware,
} from "./server/authjs-handler";

import { vikeHandler } from "./server/vike-handler";
import { telefuncHandler } from "./server/telefunc-handler";
import { Hono } from "hono";
import { createMiddleware } from "hono/factory";

interface Middleware<
  Context extends Record<string | number | symbol, unknown>,
> {
  (
    request: Request,
    context: Context,
  ): Response | void | Promise<Response> | Promise<void>;
}

export function handlerAdapter<
  Context extends Record<string | number | symbol, unknown>,
>(handler: Middleware<Context>) {
  return createMiddleware(async (context, next) => {
    let ctx = context.get("context");
    if (!ctx) {
      ctx = {};
      context.set("context", ctx);
    }

    const res = await handler(context.req.raw, ctx as Context);
    context.set("context", ctx);

    if (!res) {
      await next();
    }

    return res;
  });
}

const app = new Hono();

app.use(handlerAdapter(authjsSessionMiddleware));

/**
 * Auth.js route
 * @link {@see https://authjs.dev/getting-started/installation}
 **/
app.use("/api/auth/**", handlerAdapter(authjsHandler));

app.post("/_telefunc", handlerAdapter(telefuncHandler));

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 **/
app.all("*", handlerAdapter(vikeHandler));

export default app;
