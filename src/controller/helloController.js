import { conn } from "../database/databaseConnection.js";

export const hello = (req, res) => {
  conn.connect().then(() => {
    console.log("Connected to database");
    res.send("Hello World!");
  });
};

export const helloQuery = (req, res) => {};
