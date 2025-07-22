// app/custom_flow/auth.js
import dotenv from "dotenv";
import { getShopsCollection as Shops} from "./db";
import { login as shopifyAuthCallback } from "../shopify.server";
import { shopifyRest } from "./shopify";
import { fetchMyProducts } from "./logic";
dotenv.config();

export default async function auth(req, res) {
  await shopifyAuthCallback(req, res);
  const { shop, accessToken } = req.session.shopify;
  console.log(`🔑 OAuth ok ${shop}`);

  await Shops.updateOne({ shop }, { $set: { accessToken } }, { upsert: true });
  console.log(`💾 Saved token for ${shop}`);

  await shopifyRest(shop, accessToken, "webhooks.json", "POST", {
    webhook: {
      topic: "orders/create",
      address: `${process.env.HOST}/api/custom/orders-create`,
      format: "json",
    },
  });
  console.log(`📬 Registered webhook orders/create`);

  // Build & persist SKU → variantId map
  const products = await fetchMyProducts();
  const skuMap = {};
  products.forEach((p) => (skuMap[p.sku] = p.variantId));
  await Shops.updateOne({ shop }, { $set: { skuMap } }, { upsert: true });
  console.log("💾 Saved SKU map");

  res.redirect(`${process.env.HOST}/custom/products?shop=${shop}`);
}
