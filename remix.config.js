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

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  serverModuleFormat: "cjs",
  dev: { port: process.env.HMR_SERVER_PORT || 8002 },
  future: {},
};
