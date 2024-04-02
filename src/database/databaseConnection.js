import pkg from "pg";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const { Client } = pkg;

const currentDir = path.dirname(new URL(import.meta.url).pathname);

const sslCertPath = path.resolve(currentDir, process.env.PGCERT);

export const conn = new Client({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: {
    ca: fs.readFileSync(sslCertPath),
    rejectUnauthorized: true,
  },
});
