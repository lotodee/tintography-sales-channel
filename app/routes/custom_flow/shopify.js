// app/custom_flow/shopify.js
import fetch from "node-fetch";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

export function verifyHmac(raw, hmac) {
  const digest = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET)
    .update(raw, "utf8")
    .digest("base64");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(hmac));
}

export async function shopifyRest(shop, token, path, method = "GET", body) {
  const url = `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/${path}`;
  console.log(`➡️ ${method} ${url}`);
  const res = await fetch(url, {
    method,
    headers: {
      "X-Shopify-Access-Token": token,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

export async function shopifyGraphQL(shop, token, query, vars = {}) {
  const url = `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`;
  console.log(`➡️ POST ${url}`);
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-Shopify-Access-Token": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables: vars }),
  });
  return res.json();
}
