import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appWriteConfig = {
  projectId: import.meta.env.APPWRITE_ID,
  URL:import.meta.env.APPWRITE_URL
};

export const client = new Client();

client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.URL)


export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatar = new Avatars(client);