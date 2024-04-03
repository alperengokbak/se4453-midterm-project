import { SecretClient } from "@azure/keyvault-secrets";
import { DefaultAzureCredential } from "@azure/identity";

const vaultName = "se4453-midterm-kvlt";
const secretName = "url";
const vaultUrl = `https://se4453-midterm-kvlt.vault.azure.net/`;

const credential = new DefaultAzureCredential();
const client = new SecretClient(vaultUrl, credential);

export async function getSecret() {
  const secret = await client.getSecret(secretName);
  return secret.value;
}
