import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/health", c => c.text("OK"));

app.post("/stress-test", async c => {
  const body = await c.req.json();
  return c.json({ message: "Server received request", body });
});

serve({
  fetch: app.fetch,
  port: 3000
});

console.log("Server running on http://localhost:3000");
