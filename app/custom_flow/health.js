// app/custom_flow/health.js
import { getShopsCollection as Shops } from "./db";
import { shopifyRest } from "./shopify";

export default async function health(req, res) {
  const server = true;
  let mongodb = false;
  try {
    await Shops.database.command({ ping: 1 });
    mongodb = true;
  } catch (e) {
    console.error("Mongo ping failed", e);
  }
  const shop = req.query.shop,
    rec = shop && (await Shops.findOne({ shop }));
  let webhookRegistered = false;
  if (rec?.accessToken) {
    const data = await shopifyRest(shop, rec.accessToken, "webhooks.json");
    webhookRegistered = data.webhooks?.some((w) => w.topic === "orders/create");
  }
  res.json({ server, mongodb, webhookRegistered, shop: shop || null });
  console.log("💓 Health", server, mongodb, webhookRegistered, shop);
}
