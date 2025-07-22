import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let client;
let Shops;

export async function getShopsCollection() {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log("🔗 MongoDB connected");
    const db = client.db("tinytography");
    // Ensure unique index on shop field
    const coll = db.collection("shops");
    await coll.createIndex({ shop: 1 }, { unique: true });
    Shops = coll;
  }
  return Shops;
}
