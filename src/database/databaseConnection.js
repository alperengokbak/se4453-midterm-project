import pkg from "pg";
import { getSecret } from "./getSecret.js";

const { Client } = pkg;

export async function connectToDatabase() {
  try {
    const connectionString = await getSecret();
    const client = new Client({
      connectionString: connectionString,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    await client.connect();
    console.log("Connected to PostgreSQL database");
  } catch (error) {
    console.error("Error connecting to PostgreSQL database:", error);
  }
}
