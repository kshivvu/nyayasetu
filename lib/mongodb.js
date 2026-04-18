import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || process.env.MONGODB_DB_NAME || "nyayasetu";

const globalForMongo = globalThis;

function getClientPromise() {
  if (!uri) {
    return null;
  }

  if (!globalForMongo.__nyayasetuMongoClientPromise) {
    const client = new MongoClient(uri);
    globalForMongo.__nyayasetuMongoClientPromise = client.connect();
  }

  return globalForMongo.__nyayasetuMongoClientPromise;
}

export async function getDatabase() {
  const clientPromise = getClientPromise();
  if (!clientPromise) {
    return null;
  }

  const client = await clientPromise;
  return client.db(dbName);
}
