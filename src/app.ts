import express from "express";
import { db } from "./db/db_connect";
import { mySchemaUsers } from "./db/schema";
import { v4 } from "uuid";
import { eq } from "drizzle-orm";

const app = express();

app.use(express.json());

const PORT = 8000;

app.post("/create-user", async (req, res) => {
  let id = v4();
  await db.insert(mySchemaUsers).values({
    id,
    name: req.body.name,
    bio: req.body.bio,
  });
  let [user] = await db
    .select()
    .from(mySchemaUsers)
    .where(eq(mySchemaUsers.id, id));
  res.send(user);
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
