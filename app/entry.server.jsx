// import { PassThrough } from "stream";
// import { renderToPipeableStream } from "react-dom/server";
// import { RemixServer } from "@remix-run/react";
// import { createReadableStreamFromReadable } from "@remix-run/node";
// import { isbot } from "isbot";
// import { addDocumentResponseHeaders } from "./shopify.server";

// import "@shopify/shopify-app-remix/adapters/node";
// import {
//   ApiVersion,
//   AppDistribution,
//   shopifyApp,
// } from "@shopify/shopify-app-remix/server";
// import { MemorySessionStorage } from "@shopify/shopify-app-session-storage-memory";


// export const streamTimeout = 5000;


// export default async function handleRequest(
//   request,
//   responseStatusCode,
//   responseHeaders,
//   remixContext,
// ) {

//   const shopify = shopifyApp({
//     apiKey: process.env.SHOPIFY_API_KEY,
//     apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
//     apiVersion: ApiVersion.January25,
//     scopes: process.env.SCOPES?.split(","),
//     appUrl: process.env.SHOPIFY_APP_URL || "",
//     authPathPrefix: "/auth",
//     // Use Shopify’s in-memory session storage adapter:
//     sessionStorage: new MemorySessionStorage(),
//     distribution: AppDistribution.AppStore,
//     future: {
//       unstable_newEmbeddedAuthStrategy: true,
//       removeRest: true,
//     },
//     ...(process.env.SHOP_CUSTOM_DOMAIN
//       ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
//       : {}),
//   });

//   const addDocumentResponseHeaders = shopify.addDocumentResponseHeaders;

//   addDocumentResponseHeaders(request, responseHeaders);
//   const userAgent = request.headers.get("user-agent");
//   const callbackName = isbot(userAgent ?? "") ? "onAllReady" : "onShellReady";

//   return new Promise((resolve, reject) => {
//     const { pipe, abort } = renderToPipeableStream(
//       <RemixServer context={remixContext} url={request.url} />,
//       {
//         [callbackName]: () => {
//           const body = new PassThrough();
//           const stream = createReadableStreamFromReadable(body);

//           responseHeaders.set("Content-Type", "text/html");
//           resolve(
//             new Response(stream, {
//               headers: responseHeaders,
//               status: responseStatusCode,
//             }),
//           );
//           pipe(body);
//         },
//         onShellError(error) {
//           reject(error);
//         },
//         onError(error) {
//           responseStatusCode = 500;
//           console.error(error);
//         },
//       },
//     );

//     // Automatically timeout the React renderer after 6 seconds, which ensures
//     // React has enough time to flush down the rejected boundary contents
//     setTimeout(abort, streamTimeout + 1000);
//   });
// }


// app/entry.server.jsx
import { PassThrough } from "stream";
import { renderToPipeableStream } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { isbot } from "isbot";

// Pull in Shopify’s Node adapter (required, but no named imports here)
import "@shopify/shopify-app-remix/adapters/node";
// Pull in the core shopifyApp factory and enumerations:
import {
  shopifyApp,
  ApiVersion,
  AppDistribution,
} from "@shopify/shopify-app-remix/server";
// We’ll use in-memory session storage so there’s nothing extra to copy into build:
import { MemorySessionStorage } from "@shopify/shopify-app-session-storage-memory";

export const streamTimeout = 5000;

// Instantiate Shopify once, at module load:
const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET || "",
  apiVersion: ApiVersion.January25,
  scopes: process.env.SCOPES?.split(","),
  appUrl:"https://tintography-sales-channel.onrender.com",  // e.g. https://your-app.com
  authPathPrefix: "/auth", // your OAuth entrypoint
  sessionStorage: new MemorySessionStorage(), // no Prisma; in-memory only
  distribution: AppDistribution.AppStore,
  future: {
    unstable_newEmbeddedAuthStrategy: true,
    removeRest: true,
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

// Export this so we can inject HMAC headers before sending HTML:
export const addDocumentResponseHeaders =
  shopify.addDocumentResponseHeaders;

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  // Apply Shopify’s required HMAC / CSP headers:
  addDocumentResponseHeaders(request, responseHeaders);

  const userAgent = request.headers.get("user-agent");
  const callbackName = isbot(userAgent ?? "") ? "onAllReady" : "onShellReady";

  return new Promise((resolve, reject) => {
    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        [callbackName]: () => {
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);

          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          console.error(error);
        },
      }
    );

    // Failsafe so React doesn’t hang forever
    setTimeout(abort, streamTimeout + 1000);
  });
}
