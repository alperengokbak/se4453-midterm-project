import { conn } from "../database/databaseConnection.js";

export const hello = (req, res) => {
  conn.query("SELECT * FROM hello", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result.rows);
  });
};

export const helloQuery = (req, res) => {
  res.send("Hello World Query!");
};
