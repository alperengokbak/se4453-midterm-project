import { conn } from "../database/databaseConnection.js";

conn
  .connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

export const hello = (req, res) => {
  res.send("Hello World!");
};

export const helloQuery = (req, res) => {
  res.send("Hello World Query!");
};
