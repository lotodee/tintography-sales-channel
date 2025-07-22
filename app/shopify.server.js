// // import "@shopify/shopify-app-remix/adapters/node";
// // import {
// //   ApiVersion,
// //   AppDistribution,
// //   shopifyApp,
// // } from "@shopify/shopify-app-remix/server";
// import { createShopifyHandler } from "@shopify/shopify-app-remix/adapters/node";
// import {
//   ApiVersion,
//   AppDistribution,
//   shopifyApp,
// } from "@shopify/shopify-app-remix/server";
// import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
// import prisma from "./db.server";
// import authHandler from "./app/custom_flow/auth";
// import healthHandler from "./app/custom_flow/health";
// import webhookHandler from "./app/custom_flow/orders-create";
// import productsPage from "./app/custom_flow/products.jsx";

// const shopify = shopifyApp({
//   apiKey: process.env.SHOPIFY_API_KEY,
//   apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
//   apiVersion: ApiVersion.January25,
//   scopes: process.env.SCOPES?.split(","),
//   appUrl: process.env.SHOPIFY_APP_URL || "",
//   authPathPrefix: "/auth",
//   sessionStorage: new PrismaSessionStorage(prisma),
//   distribution: AppDistribution.AppStore,
//   future: {
//     unstable_newEmbeddedAuthStrategy: true,
//     removeRest: true,
//   },
//   ...(process.env.SHOP_CUSTOM_DOMAIN
//     ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
//     : {}),
// });

// export default shopify;
// export const apiVersion = ApiVersion.January25;
// export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
// export const authenticate = shopify.authenticate;
// export const unauthenticated = shopify.unauthenticated;
// export const login = shopify.login;
// server.get("/custom/auth", authHandler);
// server.get("/api/custom/health", healthHandler);
// server.post("/api/custom/orders-create", webhookHandler);
// server.get("/custom/products", productsPage);


// app/shopify.server.js
import { createShopifyHandler } from "@shopify/shopify-app-remix/adapters/node";
import {
  ApiVersion,
  AppDistribution,
  shopifyApp,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";
import authHandler    from "./custom_flow/auth";
import healthHandler  from "./custom_flow/health";
import webhookHandler from "./custom_flow/orders-create";
import productsPage   from "./custom_flow/products.jsx";

const shopify = shopifyApp({
  apiKey:         process.env.SHOPIFY_API_KEY,
  apiSecretKey:   process.env.SHOPIFY_API_SECRET || "",
  apiVersion:     ApiVersion.January25,
  scopes:         process.env.SCOPES?.split(","),
  appUrl:         process.env.SHOPIFY_APP_URL || "",
  authPathPrefix: "/auth",
  sessionStorage: new PrismaSessionStorage(prisma),
  distribution:   AppDistribution.AppStore,
  future: {
    unstable_newEmbeddedAuthStrategy: true,
    removeRest:                      true,
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}
  ),
});

const handler = createShopifyHandler({
  shopify,
  customRoutes: [
    { method: "GET",  path: "/custom/auth",           handler: authHandler },
    { method: "GET",  path: "/api/custom/health",      handler: healthHandler },
    { method: "POST", path: "/api/custom/orders-create", handler: webhookHandler },
    { method: "GET",  path: "/custom/products",        handler: productsPage },
  ],
});

export default handler;
export const apiVersion               = ApiVersion.January25;
export const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;
export const authenticate             = shopify.authenticate;
export const unauthenticated          = shopify.unauthenticated;
export const login                    = shopify.login;
export const registerWebhooks         = shopify.registerWebhooks;
export const sessionStorage           = shopify.sessionStorage;
