// app/custom_flow/db.js
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect();

export const Shops = client.db("tinytography").collection("shops");
console.log("🔗 MongoDB connected");
