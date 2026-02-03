import { Hono } from "hono";

const app = new Hono();

app.get("/health", c => c.text("OK"));

app.post("/stress-test", async c => {
  const body = await c.req.json();
  return c.json({ status: "received", body });
});

export default app;

import { serve } from "@hono/node-server";

serve({
  fetch: app.fetch,
  port: 3000
});
