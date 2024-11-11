import { Hono } from "hono";
import { handle } from "hono/vercel";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono().basePath("/api");

app.use(prettyJSON());

app.get("/", (ctx) => {
  return ctx.json({ message: `Hello Hono!`, ok: true });
});

export const GET = handle(app);

export default app;
