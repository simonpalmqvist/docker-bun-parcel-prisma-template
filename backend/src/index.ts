import { Elysia, t } from "elysia";
import { db } from "./db";

const app = new Elysia()
  .get("/message", () => ({ message: "Hello from backend" }))
  .post(
    "/users",
    async (req) => db.user.create({ data: { username: req.body.username } }),
    {
      body: t.Object({
        username: t.String(),
      }),
    }
  )
  .get("/users", async () => db.user.findMany())
  .get("/user/:id", async ({ params: { id } }) =>
    db.user.findUnique({ where: { id: Number(id) } })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
