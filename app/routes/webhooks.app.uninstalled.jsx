// import { authenticate } from "../shopify.server";
// import db from "../db.server";

// export const action = async ({ request }) => {
//   const { shop, session, topic } = await authenticate.webhook(request);

//   console.log(`Received ${topic} webhook for ${shop}`);

//   // Webhook requests can trigger multiple times and after an app has already been uninstalled.
//   // If this webhook already ran, the session may have been deleted previously.
//   if (session) {
//     await db.session.deleteMany({ where: { shop } });
//   }

//   return new Response();
// };

import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { getShopsCollection } from "./custom_flow/db";

export const action = async ({ request }) => {
  // 1. Verify HMAC & parse the webhook payload
  const { shop, topic } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  // 2. Connect to MongoDB & get the shops collection
  const Shops = await getShopsCollection();

  // 3. Remove any stored session or shop record for this shop
  //    (Equivalent of Prisma’s deleteMany)
  await Shops.deleteMany({ shop });

  // 4. Return HTTP 200 to let Shopify know we handled it
  return json({}, { status: 200 });
};
