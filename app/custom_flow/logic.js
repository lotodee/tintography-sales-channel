// app/custom_flow/logic.js
import { shopifyRest } from "./shopify";
import { Shops } from "./db";

export async function fetchMyProducts() {
  const domain = "tinytography.myshopify.com",
    token = process.env.TINYTOGRAPHY_TOKEN;
  let all = [],
    page = null;
  do {
    const path = page
      ? `products.json?limit=250&page_info=${page}`
      : `products.json?limit=250`;
    const { products, link } = await shopifyRest(domain, token, path);
    all.push(...products);
    page = (link?.match(/page_info=([^>]+)>; rel="next"/) || [])[1] || null;
    console.log(`🛍 Fetched ${products.length}, next=${page}`);
  } while (page);
  return all.map((p) => ({
    id: p.id,
    title: p.title,
    sku: p.variants[0].sku,
    variantId: p.variants[0].id,
    price: p.variants[0].price,
    description: p.body_html,
  }));
}

export async function loadSkuMap(shop) {
  const rec = await Shops.findOne({ shop });
  return rec?.skuMap || {};
}
