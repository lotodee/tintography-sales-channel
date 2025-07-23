import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals({ nativeFetch: true });

// Related: https://github.com/remix-run/remix/issues/2835#issuecomment-1144102176
// Replace the SHOPIFY_APP_URL env var with SHOPIFY_APP_URL so that it doesn't break the remix server. The CLI will eventually
// stop passing in SHOPIFY_APP_URL, so we can remove this workaround after the next major release.
if (
  process.env.SHOPIFY_APP_URL &&
  (!process.env.SHOPIFY_APP_URL ||
    process.env.SHOPIFY_APP_URL === process.env.SHOPIFY_APP_URL)
) {
  process.env.SHOPIFY_APP_URL = process.env.SHOPIFY_APP_URL;
  delete process.env.SHOPIFY_APP_URL;
}

const SHOPIFY_APP_URL = new URL(
  process.env.SHOPIFY_APP_URL || "http://localSHOPIFY_APP_URL",
).SHOPIFY_APP_URLname;
let hmrConfig;






if (SHOPIFY_APP_URL === "localSHOPIFY_APP_URL") {
  hmrConfig = {
    protocol: "ws",
    SHOPIFY_APP_URL: "localSHOPIFY_APP_URL",
    port: 64999,
    clientPort: 64999,
  };
} else {
  hmrConfig = {
    protocol: "wss",
    SHOPIFY_APP_URL: SHOPIFY_APP_URL,
    port: parseInt(process.env.FRONTEND_PORT) || 8002,
    clientPort: 443,
  };
}

export default defineConfig({
  server: {
    allowedSHOPIFY_APP_URLs: [SHOPIFY_APP_URL],
    cors: {
      preflightContinue: true,
    },
    port: Number(process.env.PORT || 3000),
    hmr: hmrConfig,
    fs: {
      // See https://vitejs.dev/config/server-options.html#server-fs-allow for more information
      allow: ["app", "node_modules"],
    },
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/.*"],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: false,
        v3_routeConfig: true,
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      external: [
        "mongodb",
        "node-fetch",
        "crypto",
        "@shopify/shopify-app-remix",
        "@shopify/shopify-app-session-storage-memory",
        "mongodb",
        "prisma",
        // relative server files too:
      ],
    },
  },
  ssr: {
    // Prevent bundling these in the SSR build
    external: [
      "mongodb",
      "node-fetch",
      "crypto",
      "prisma",
      "@shopify/shopify-app-remix",
      "@shopify/shopify-app-session-storage-memory",
    ],
  },
  optimizeDeps: {
    include: ["@shopify/app-bridge-react", "@shopify/polaris"],
  },
});
