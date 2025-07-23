// import { authenticate } from "../shopify.server";
// import db from "../db.server";

// export const action = async ({ request }) => {
//   const { payload, session, topic, shop } = await authenticate.webhook(request);

//   console.log(`Received ${topic} webhook for ${shop}`);
//   const current = payload.current;

//   if (session) {
//     await db.session.update({
//       where: {
//         id: session.id,
//       },
//       data: {
//         scope: current.toString(),
//       },
//     });
//   }

//   return new Response();
// };

// app/routes/webhooks.app.scopes_update.js
import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { getShopsCollection } from "./custom_flow/db";

export const action = async ({ request }) => {
  // 1. Verify HMAC & parse body:
  const { payload, topic, shop } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  // 2. Connect to Mongo & get the collection:
  const Shops = await getShopsCollection();

  // 3. Update the shop’s stored scopes (upsert if missing):
  await Shops.updateOne(
    { shop },
    { $set: { scopes: payload.current.toString() } },
    { upsert: true },
  );

  // 4. Return 200 OK
  return json({}, { status: 200 });
};
