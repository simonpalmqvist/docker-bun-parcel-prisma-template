import { Elysia, t } from "elysia";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const app = new Elysia()
  .get("/", () => ({ message: "Hello from backend" }))
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
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
