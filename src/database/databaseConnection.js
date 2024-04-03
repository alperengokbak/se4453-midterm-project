import pkg from "pg";
import dotenv from "dotenv";
import { getSecret } from "../keyvault/keyVaultService.js";
dotenv.config();

const { Client } = pkg;

const pgDatabase = await getSecret("PGDATABASE");
const pgHost = await getSecret("PGHOST");
const pgUser = await getSecret("PGUSER");
const pgPassword = await getSecret("PGPASSWORD");
const pgPort = await getSecret("PGPORT");
export const conn = new Client({
  host: pgHost,
  user: pgUser,
  password: pgPassword,
  database: pgDatabase,
  port: pgPort,
  ssl: true,
});
