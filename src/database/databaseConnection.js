import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Client } = pkg;

export const conn = new Client({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
  ssl: true,
});
