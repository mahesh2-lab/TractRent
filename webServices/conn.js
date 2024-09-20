import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668e2128000242cc491f');

export const account = new Account(client);
export { ID } from 'appwrite';
