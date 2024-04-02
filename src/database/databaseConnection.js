import pkg from "pg";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const { Client } = pkg;

export const conn = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
});
