import { conn } from "../database/databaseConnection.js";

export const hello = (req, res) => {
  conn
    .connect()
    .then(() => {
      res.send("Connected to database");
    })
    .catch((err) => console.error("Connection error", err.stack));
};

export const helloQuery = (req, res) => {
  res.send("Hello World Query!");
};
