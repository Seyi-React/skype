import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appWriteConfig = {
  projectId: import.meta.env.APPWRITE_ID,
  URL:import.meta.env.APPWRITE_URL,
  databaseId:import.meta.env.APPWRITE_DATABASE,
  storage:import.meta.env.APPWRITE_STORAGE,
  userId:import.meta.env.APPWRITE__USER_ID,
  postId:import.meta.env.APPWRITE_POST_ID,
  savesId:import.meta.env.APPWRITE_SAVES_ID,
};

export const client = new Client();

client.setProject(appWriteConfig.projectId);
client.setEndpoint(appWriteConfig.URL)


export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatar = new Avatars(client);