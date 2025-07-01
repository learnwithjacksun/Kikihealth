import { Client, Databases, Account, Storage } from "appwrite";

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

const DB = import.meta.env.VITE_APPWRITE_DATABASE;
const USERS = import.meta.env.VITE_APPWRITE_USERS;
const NOTIFICATIONS = import.meta.env.VITE_APPWRITE_NOTIFICATIONS;

const appwrite = {
  account,
  databases,
  storage,
  DB,
  USERS,
  NOTIFICATIONS,
};

export default appwrite;
