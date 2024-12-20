import express from "express";
import { db } from "./db/db_connect";

db.$client
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
