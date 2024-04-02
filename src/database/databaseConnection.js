import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

const config = {
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
};

export const conn = new Client({ config });
