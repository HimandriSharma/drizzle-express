import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "drizzle-db-test",
  ssl: false,
});

client
  .connect()
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

export const db = drizzle(client);
