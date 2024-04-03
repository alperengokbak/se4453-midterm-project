import { connectToDatabase } from "../database/databaseConnection.js";

export const hello = (req, res) => {
  connectToDatabase();
};

export const helloQuery = (req, res) => {
  res.send("Hello World Query!");
};
