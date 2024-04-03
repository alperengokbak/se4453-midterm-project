import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

import dotenv from "dotenv";
dotenv.config();

const keyVaultName = "se4453-midterm-kvlt";
const keyVaultUrl = `https://${keyVaultName}.vault.azure.net`;

const credential = new DefaultAzureCredential();
const secretClient = new SecretClient(keyVaultUrl, credential);

async function getSecret(secretName) {
  const secret = await secretClient.getSecret(secretName);
  return secret.value;
}

export { getSecret };
