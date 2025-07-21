// app/custom_flow/orders-create.js
import { verifyHmac } from "./shopify";
import { loadSkuMap } from "./logic";
import dotenv from "dotenv";
dotenv.config();

export default async function webhook(req, res) {
  const hmac = req.headers["x-shopify-hmac-sha256"];
  let raw = "";
  req.on("data", (c) => (raw += c));
  req.on("end", async () => {
    if (!verifyHmac(raw, hmac)) {
      console.warn("❌ Bad HMAC");
      return res.status(401).end();
    }
    const order = JSON.parse(raw);
    console.log(`📥 Order ${order.id} from ${order.shop_domain}`);
    const skuMap = await loadSkuMap(order.shop_domain);
    const items = order.line_items.filter((i) => skuMap[i.sku] != null);
    if (!items.length) {
      console.log("⏭️ No matching SKUs");
      return res.status(200).end();
    }
    const mirror = await fetch(
      `https://tinytography.myshopify.com/admin/api/${process.env.SHOPIFY_API_VERSION}/orders.json`,
      {
        method: "POST",
        headers: {
          "X-Shopify-Access-Token": process.env.TINYTOGRAPHY_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: {
            line_items: items.map((i) => ({
              variant_id: skuMap[i.sku],
              quantity: i.quantity,
            })),
            email: order.email,
            shipping_address: order.shipping_address,
            tags: "partner:other-store",
          },
        }),
      },
    );
    console.log("🔄 Mirrored status", mirror.status);
    res.status(200).end();
  });
}
