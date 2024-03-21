import { Client, Databases, Account } from 'appwrite';

export const PROJECT_ID = '65faae4f88c07977c912'
export const DATABASE_ID = '65faafdb2d7e159a4ba8'
export const COLLECTION_ID_MESSAGES = '65faafee488d3fbf7132'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65faae4f88c07977c912');

export const databases = new Databases(client);
export const account = new Account(client)

export default client;