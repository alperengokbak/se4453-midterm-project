import { conn } from "../database/databaseConnection.js";

export const hello = (req, res) => {
  conn
    .connect()
    .then(() => {
      res.send("Hello World!");
    })
    .catch((err) => {
      res.send("Error: " + err);
    });
};

export const helloQuery = (req, res) => {
  res.send("Hello World Query!");
};
