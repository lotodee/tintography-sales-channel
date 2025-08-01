import { j as _, R as gt, r as vt } from "./index-C0U6NBub.js";
import { v as Je, d as At, O as It, w as Lt } from "./components-BK6Ct-Ob.js";
import { A as Tt, p as yt } from "./styles-DJqeKJDA.js";
import "./context-JLkqRqjJ.js";
let Nt;
try {
  Nt = crypto;
} catch {}
var tr;
(function (e) {
  ((e.Base64 = "base64"), (e.Hex = "hex"));
})(tr || (tr = {}));
var nr;
(function (e) {
  ((e[(e.Error = 0)] = "Error"),
    (e[(e.Warning = 1)] = "Warning"),
    (e[(e.Info = 2)] = "Info"),
    (e[(e.Debug = 3)] = "Debug"));
})(nr || (nr = {}));
var J;
(function (e) {
  ((e.October22 = "2022-10"),
    (e.January23 = "2023-01"),
    (e.April23 = "2023-04"),
    (e.July23 = "2023-07"),
    (e.October23 = "2023-10"),
    (e.January24 = "2024-01"),
    (e.April24 = "2024-04"),
    (e.July24 = "2024-07"),
    (e.October24 = "2024-10"),
    (e.January25 = "2025-01"),
    (e.April25 = "2025-04"),
    (e.July25 = "2025-07"),
    (e.Unstable = "unstable"));
})(J || (J = {}));
J.April25;
J.July25;
var G;
(function (e) {
  ((e.AccessToken = "X-Shopify-Access-Token"),
    (e.ApiVersion = "X-Shopify-API-Version"),
    (e.Domain = "X-Shopify-Shop-Domain"),
    (e.Hmac = "X-Shopify-Hmac-Sha256"),
    (e.Topic = "X-Shopify-Topic"),
    (e.SubTopic = "X-Shopify-Sub-Topic"),
    (e.WebhookId = "X-Shopify-Webhook-Id"),
    (e.StorefrontPrivateToken = "Shopify-Storefront-Private-Token"),
    (e.StorefrontSDKVariant = "X-SDK-Variant"),
    (e.StorefrontSDKVersion = "X-SDK-Version"));
})(G || (G = {}));
var sr;
(function (e) {
  ((e.Rest = "rest"), (e.Graphql = "graphql"));
})(sr || (sr = {}));
var ir;
(function (e) {
  ((e.OneTime = "ONE_TIME"),
    (e.Every30Days = "EVERY_30_DAYS"),
    (e.Annual = "ANNUAL"),
    (e.Usage = "USAGE"));
})(ir || (ir = {}));
var or;
(function (e) {
  ((e.ApplyImmediately = "APPLY_IMMEDIATELY"),
    (e.ApplyOnNextBillingCycle = "APPLY_ON_NEXT_BILLING_CYCLE"),
    (e.Standard = "STANDARD"));
})(or || (or = {}));
var ar;
(function (e) {
  ((e.Get = "GET"), (e.Post = "POST"), (e.Put = "PUT"), (e.Delete = "DELETE"));
})(ar || (ar = {}));
let lr;
(function (e) {
  ((e.Get = "GET"),
    (e.Post = "POST"),
    (e.Put = "PUT"),
    (e.Patch = "PATCH"),
    (e.Delete = "DELETE"),
    (e.Head = "HEAD"),
    (e.Options = "OPTIONS"),
    (e.Connect = "CONNECT"));
})(lr || (lr = {}));
let j;
(function (e) {
  ((e[(e.Continue = 100)] = "Continue"),
    (e[(e.SwitchingProtocols = 101)] = "SwitchingProtocols"),
    (e[(e.Ok = 200)] = "Ok"),
    (e[(e.Created = 201)] = "Created"),
    (e[(e.Accepted = 202)] = "Accepted"),
    (e[(e.NonAuthoritativeInformation = 203)] = "NonAuthoritativeInformation"),
    (e[(e.NoContent = 204)] = "NoContent"),
    (e[(e.ResetContent = 205)] = "ResetContent"),
    (e[(e.PartialContent = 206)] = "PartialContent"),
    (e[(e.MultipleChoices = 300)] = "MultipleChoices"),
    (e[(e.MovedPermanently = 301)] = "MovedPermanently"),
    (e[(e.Found = 302)] = "Found"),
    (e[(e.SeeOther = 303)] = "SeeOther"),
    (e[(e.NotModified = 304)] = "NotModified"),
    (e[(e.UseProxy = 305)] = "UseProxy"),
    (e[(e.TemporaryRedirect = 307)] = "TemporaryRedirect"),
    (e[(e.BadRequest = 400)] = "BadRequest"),
    (e[(e.Unauthorized = 401)] = "Unauthorized"),
    (e[(e.PaymentRequired = 402)] = "PaymentRequired"),
    (e[(e.Forbidden = 403)] = "Forbidden"),
    (e[(e.NotFound = 404)] = "NotFound"),
    (e[(e.MethodNotAllowed = 405)] = "MethodNotAllowed"),
    (e[(e.NotAcceptable = 406)] = "NotAcceptable"),
    (e[(e.ProxyAuthenticationRequired = 407)] = "ProxyAuthenticationRequired"),
    (e[(e.RequestTimeout = 408)] = "RequestTimeout"),
    (e[(e.Conflict = 409)] = "Conflict"),
    (e[(e.Gone = 410)] = "Gone"),
    (e[(e.LengthRequired = 411)] = "LengthRequired"),
    (e[(e.PreconditionFailed = 412)] = "PreconditionFailed"),
    (e[(e.RequestEntityTooLarge = 413)] = "RequestEntityTooLarge"),
    (e[(e.RequestUriTooLong = 414)] = "RequestUriTooLong"),
    (e[(e.UnsupportedMediaType = 415)] = "UnsupportedMediaType"),
    (e[(e.RequestedRangeNotSatisfiable = 416)] =
      "RequestedRangeNotSatisfiable"),
    (e[(e.ExpectationFailed = 417)] = "ExpectationFailed"),
    (e[(e.ImATeapot = 418)] = "ImATeapot"),
    (e[(e.UnprocessableEntity = 422)] = "UnprocessableEntity"),
    (e[(e.TooManyRequests = 429)] = "TooManyRequests"),
    (e[(e.InternalServerError = 500)] = "InternalServerError"),
    (e[(e.NotImplemented = 501)] = "NotImplemented"),
    (e[(e.BadGateway = 502)] = "BadGateway"),
    (e[(e.ServiceUnavailable = 503)] = "ServiceUnavailable"),
    (e[(e.GatewayTimeout = 504)] = "GatewayTimeout"),
    (e[(e.HttpVersionNotSupported = 505)] = "HttpVersionNotSupported"));
})(j || (j = {}));
let cr;
(function (e) {
  ((e.Accept = "Accept"),
    (e.AcceptEncoding = "Accept-Encoding"),
    (e.AcceptLanguage = "Accept-Language"),
    (e.AccessControlAllowCredentials = "Access-Control-Allow-Credentials"),
    (e.AccessControlAllowHeaders = "Access-Control-Allow-Headers"),
    (e.AccessControlAllowMethods = "Access-Control-Allow-Methods"),
    (e.AccessControlAllowOrigin = "Access-Control-Allow-Origin"),
    (e.AccessControlExposeHeaders = "Access-Control-Expose-Headers"),
    (e.AccessControlMaxAge = "Access-Control-Max-Age"),
    (e.AccessControlRequestHeaders = "Access-Control-Request-Headers"),
    (e.AccessControlRequestMethod = "Access-Control-Request-Method"),
    (e.Authorization = "Authorization"),
    (e.CacheControl = "Cache-Control"),
    (e.CacheStatus = "Cache-Status"),
    (e.Connection = "Connection"),
    (e.ContentDisposition = "Content-Disposition"),
    (e.ContentEncoding = "Content-Encoding"),
    (e.ContentLength = "Content-Length"),
    (e.ContentSecurityPolicy = "Content-Security-Policy"),
    (e.ContentSecurityPolicyReportOnly = "Content-Security-Policy-Report-Only"),
    (e.ContentType = "Content-Type"),
    (e.ContentTypeOptions = "X-Content-Type-Options"),
    (e.Cookie = "Cookie"),
    (e.DownloadOptions = "X-Download-Options"),
    (e.ETag = "ETag"),
    (e.Forwarded = "Forwarded"),
    (e.ForwardedFor = "X-Forwarded-For"),
    (e.ForwardedSHOPIFY_APP_URL = "X-Forwarded-SHOPIFY_APP_URL"),
    (e.ForwardedProtocol = "X-Forwarded-Proto"),
    (e.FrameOptions = "X-Frame-Options"),
    (e.SHOPIFY_APP_URL = "SHOPIFY_APP_URL"),
    (e.IfNoneMatch = "If-None-Match"),
    (e.Location = "Location"),
    (e.Origin = "Origin"),
    (e.ReferrerPolicy = "Referrer-Policy"),
    (e.ServerTiming = "Server-Timing"),
    (e.StrictTransportSecurity = "Strict-Transport-Security"),
    (e.TimingAllowOrigin = "Timing-Allow-Origin"),
    (e.Trailer = "Trailer"),
    (e.TransferEncoding = "Transfer-Encoding"),
    (e.UserAgent = "User-Agent"),
    (e.WwwAuthenticate = "WWW-Authenticate"),
    (e.XhrRedirectedTo = "X-XHR-Redirected-To"),
    (e.XhrReferer = "X-XHR-Referer"),
    (e.XssProtecton = "X-XSS-Protection"),
    (e.XContentTypeOptions = "X-Content-Type-Options"),
    (e.XDownloadOptions = "X-Download-Options"),
    (e.XForwardedFor = "X-Forwarded-For"),
    (e.XForwardedSHOPIFY_APP_URL = "X-Forwarded-SHOPIFY_APP_URL"),
    (e.XForwardedProto = "X-Forwarded-Proto"),
    (e.XFrameOptions = "X-Frame-Options"),
    (e.XXhrRedirectedTo = "X-XHR-Redirected-To"),
    (e.XXhrReferer = "X-XHR-Referer"),
    (e.XXssProtecton = "X-XSS-Protection"),
    (e.XXssProtection = "X-XSS-Protection"));
})(cr || (cr = {}));
let ur;
(function (e) {
  ((e.ChildSrc = "child-src"),
    (e.ConnectSrc = "connect-src"),
    (e.DefaultSrc = "default-src"),
    (e.FontSrc = "font-src"),
    (e.FrameSrc = "frame-src"),
    (e.ImgSrc = "img-src"),
    (e.ManifestSrc = "manifest-src"),
    (e.MediaSrc = "media-src"),
    (e.ObjectSrc = "object-src"),
    (e.PrefetchSrc = "prefetch-src"),
    (e.ScriptSrc = "script-src"),
    (e.StyleSrc = "style-src"),
    (e.WebrtcSrc = "webrtc-src"),
    (e.WorkerSrc = "worker-src"),
    (e.BaseUri = "base-uri"),
    (e.PluginTypes = "plugin-types"),
    (e.Sandbox = "sandbox"),
    (e.FormAction = "form-action"),
    (e.FrameAncestors = "frame-ancestors"),
    (e.ReportUri = "report-uri"),
    (e.BlockAllMixedContent = "block-all-mixed-content"),
    (e.RequireSriFor = "require-sri-for"),
    (e.UpgradeInsecureRequests = "upgrade-insecure-requests"));
})(ur || (ur = {}));
let fr;
(function (e) {
  ((e.Forms = "allow-forms"),
    (e.SameOrigin = "allow-same-origin"),
    (e.Scripts = "allow-scripts"),
    (e.Popups = "allow-popups"),
    (e.Modals = "allow-modals"),
    (e.OrientationLock = "allow-orientation-lock"),
    (e.PointerLock = "allow-pointer-lock"),
    (e.Presentation = "allow-presentation"),
    (e.PopupsToEscapeSandbox = "allow-popups-to-escape-sandbox"),
    (e.TopNavigation = "allow-top-navigation"));
})(fr || (fr = {}));
let hr;
(function (e) {
  ((e.Any = "*"),
    (e.Self = "'self'"),
    (e.UnsafeInline = "'unsafe-inline'"),
    (e.UnsafeEval = "'unsafe-eval'"),
    (e.None = "'none'"),
    (e.StrictDynamic = "'strict-dynamic'"),
    (e.ReportSample = "'report-sample'"),
    (e.Data = "data:"),
    (e.Blob = "blob:"),
    (e.FileSystem = "filesystem:"));
})(hr || (hr = {}));
let dr;
(function (e) {
  ((e.Script = "script"), (e.Style = "style"));
})(dr || (dr = {}));
let mr;
(function (e) {
  ((e.Sha256 = "sha256"), (e.Sha384 = "sha384"), (e.Sha512 = "sha512"));
})(mr || (mr = {}));
let pr;
(function (e) {
  ((e.Informational = "1xx"),
    (e.Success = "2xx"),
    (e.Redirection = "3xx"),
    (e.ClientError = "4xx"),
    (e.ServerError = "5xx"),
    (e.Unknown = "Unknown"));
})(pr || (pr = {}));
let k;
(function (e) {
  ((e.NoCache = "no-cache"),
    (e.NoStore = "no-store"),
    (e.MustRevalidate = "must-revalidate"),
    (e.MaxAge = "max-age"));
})(k || (k = {}));
`${k.NoCache}${k.NoStore}${k.MustRevalidate}${k.MaxAge}`;
var Er;
(function (e) {
  ((e.Flow = "flow"),
    (e.Webhook = "webhook"),
    (e.FulfillmentService = "fulfillment_service"));
})(Er || (Er = {}));
var Rr;
(function (e) {
  ((e.JSON = "application/json"),
    (e.GraphQL = "application/graphql"),
    (e.URLEncoded = "application/x-www-form-urlencoded"));
})(Rr || (Rr = {}));
var gr;
(function (e) {
  ((e.OnlineAccessToken =
    "urn:shopify:params:oauth:token-type:online-access-token"),
    (e.OfflineAccessToken =
      "urn:shopify:params:oauth:token-type:offline-access-token"));
})(gr || (gr = {}));
var vr;
(function (e) {
  ((e.Http = "http"), (e.EventBridge = "eventbridge"), (e.PubSub = "pubsub"));
})(vr || (vr = {}));
var Ar;
(function (e) {
  ((e.Create = "create"), (e.Update = "update"), (e.Delete = "delete"));
})(Ar || (Ar = {}));
G.SubTopic;
(G.ApiVersion, G.Domain, G.Hmac, G.Topic, G.WebhookId);
(j.Ok + "",
  j.BadRequest + "",
  j.Unauthorized + "",
  j.NotFound + "",
  j.InternalServerError + "");
var Ir;
(function (e) {
  ((e.AppStore = "app_store"),
    (e.SingleMerchant = "single_merchant"),
    (e.ShopifyAdmin = "shopify_admin"));
})(Ir || (Ir = {}));
var Lr;
(function (e) {
  ((e.MissingShop = "MISSING_SHOP"), (e.InvalidShop = "INVALID_SHOP"));
})(Lr || (Lr = {}));
function $t(e) {
  const {
    parentHeaders: c,
    loaderHeaders: s,
    actionHeaders: t,
    errorHeaders: i,
  } = e;
  return i && Array.from(i.entries()).length > 0
    ? i
    : new Headers([
        ...(c ? Array.from(c.entries()) : []),
        ...(s ? Array.from(s.entries()) : []),
        ...(t ? Array.from(t.entries()) : []),
      ]);
}
function St(e) {
  if (
    e.constructor.name === "ErrorResponse" ||
    e.constructor.name === "ErrorResponseImpl"
  )
    return _.jsx("div", {
      dangerouslySetInnerHTML: { __html: e.data || "Handling response" },
    });
  throw e;
}
const wt = { error: St, headers: $t };
var z = { exports: {} },
  ie,
  Tr;
function K() {
  if (Tr) return ie;
  Tr = 1;
  const e = "2.0.0",
    c = 256,
    s = Number.MAX_SAFE_INTEGER || 9007199254740991,
    t = 16,
    i = c - 6;
  return (
    (ie = {
      MAX_LENGTH: c,
      MAX_SAFE_COMPONENT_LENGTH: t,
      MAX_SAFE_BUILD_LENGTH: i,
      MAX_SAFE_INTEGER: s,
      RELEASE_TYPES: [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease",
      ],
      SEMVER_SPEC_VERSION: e,
      FLAG_INCLUDE_PRERELEASE: 1,
      FLAG_LOOSE: 2,
    }),
    ie
  );
}
var oe, yr;
function Z() {
  if (yr) return oe;
  yr = 1;
  var e = {};
  return (
    (oe =
      typeof process == "object" &&
      e &&
      e.NODE_DEBUG &&
      /\bsemver\b/i.test(e.NODE_DEBUG)
        ? (...s) => console.error("SEMVER", ...s)
        : () => {}),
    oe
  );
}
var Nr;
function Y() {
  return (
    Nr ||
      ((Nr = 1),
      (function (e, c) {
        const {
            MAX_SAFE_COMPONENT_LENGTH: s,
            MAX_SAFE_BUILD_LENGTH: t,
            MAX_LENGTH: i,
          } = K(),
          d = Z();
        c = e.exports = {};
        const a = (c.re = []),
          f = (c.safeRe = []),
          o = (c.src = []),
          n = (c.safeSrc = []),
          r = (c.t = {});
        let l = 0;
        const u = "[a-zA-Z0-9-]",
          E = [
            ["\\s", 1],
            ["\\d", i],
            [u, t],
          ],
          N = (y) => {
            for (const [S, q] of E)
              y = y
                .split(`${S}*`)
                .join(`${S}{0,${q}}`)
                .split(`${S}+`)
                .join(`${S}{1,${q}}`);
            return y;
          },
          m = (y, S, q) => {
            const w = N(S),
              F = l++;
            (d(y, F, S),
              (r[y] = F),
              (o[F] = S),
              (n[F] = w),
              (a[F] = new RegExp(S, q ? "g" : void 0)),
              (f[F] = new RegExp(w, q ? "g" : void 0)));
          };
        (m("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
          m("NUMERICIDENTIFIERLOOSE", "\\d+"),
          m("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${u}*`),
          m(
            "MAINVERSION",
            `(${o[r.NUMERICIDENTIFIER]})\\.(${o[r.NUMERICIDENTIFIER]})\\.(${o[r.NUMERICIDENTIFIER]})`,
          ),
          m(
            "MAINVERSIONLOOSE",
            `(${o[r.NUMERICIDENTIFIERLOOSE]})\\.(${o[r.NUMERICIDENTIFIERLOOSE]})\\.(${o[r.NUMERICIDENTIFIERLOOSE]})`,
          ),
          m(
            "PRERELEASEIDENTIFIER",
            `(?:${o[r.NONNUMERICIDENTIFIER]}|${o[r.NUMERICIDENTIFIER]})`,
          ),
          m(
            "PRERELEASEIDENTIFIERLOOSE",
            `(?:${o[r.NONNUMERICIDENTIFIER]}|${o[r.NUMERICIDENTIFIERLOOSE]})`,
          ),
          m(
            "PRERELEASE",
            `(?:-(${o[r.PRERELEASEIDENTIFIER]}(?:\\.${o[r.PRERELEASEIDENTIFIER]})*))`,
          ),
          m(
            "PRERELEASELOOSE",
            `(?:-?(${o[r.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${o[r.PRERELEASEIDENTIFIERLOOSE]})*))`,
          ),
          m("BUILDIDENTIFIER", `${u}+`),
          m(
            "BUILD",
            `(?:\\+(${o[r.BUILDIDENTIFIER]}(?:\\.${o[r.BUILDIDENTIFIER]})*))`,
          ),
          m(
            "FULLPLAIN",
            `v?${o[r.MAINVERSION]}${o[r.PRERELEASE]}?${o[r.BUILD]}?`,
          ),
          m("FULL", `^${o[r.FULLPLAIN]}$`),
          m(
            "LOOSEPLAIN",
            `[v=\\s]*${o[r.MAINVERSIONLOOSE]}${o[r.PRERELEASELOOSE]}?${o[r.BUILD]}?`,
          ),
          m("LOOSE", `^${o[r.LOOSEPLAIN]}$`),
          m("GTLT", "((?:<|>)?=?)"),
          m("XRANGEIDENTIFIERLOOSE", `${o[r.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
          m("XRANGEIDENTIFIER", `${o[r.NUMERICIDENTIFIER]}|x|X|\\*`),
          m(
            "XRANGEPLAIN",
            `[v=\\s]*(${o[r.XRANGEIDENTIFIER]})(?:\\.(${o[r.XRANGEIDENTIFIER]})(?:\\.(${o[r.XRANGEIDENTIFIER]})(?:${o[r.PRERELEASE]})?${o[r.BUILD]}?)?)?`,
          ),
          m(
            "XRANGEPLAINLOOSE",
            `[v=\\s]*(${o[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${o[r.XRANGEIDENTIFIERLOOSE]})(?:${o[r.PRERELEASELOOSE]})?${o[r.BUILD]}?)?)?`,
          ),
          m("XRANGE", `^${o[r.GTLT]}\\s*${o[r.XRANGEPLAIN]}$`),
          m("XRANGELOOSE", `^${o[r.GTLT]}\\s*${o[r.XRANGEPLAINLOOSE]}$`),
          m(
            "COERCEPLAIN",
            `(^|[^\\d])(\\d{1,${s}})(?:\\.(\\d{1,${s}}))?(?:\\.(\\d{1,${s}}))?`,
          ),
          m("COERCE", `${o[r.COERCEPLAIN]}(?:$|[^\\d])`),
          m(
            "COERCEFULL",
            o[r.COERCEPLAIN] +
              `(?:${o[r.PRERELEASE]})?(?:${o[r.BUILD]})?(?:$|[^\\d])`,
          ),
          m("COERCERTL", o[r.COERCE], !0),
          m("COERCERTLFULL", o[r.COERCEFULL], !0),
          m("LONETILDE", "(?:~>?)"),
          m("TILDETRIM", `(\\s*)${o[r.LONETILDE]}\\s+`, !0),
          (c.tildeTrimReplace = "$1~"),
          m("TILDE", `^${o[r.LONETILDE]}${o[r.XRANGEPLAIN]}$`),
          m("TILDELOOSE", `^${o[r.LONETILDE]}${o[r.XRANGEPLAINLOOSE]}$`),
          m("LONECARET", "(?:\\^)"),
          m("CARETTRIM", `(\\s*)${o[r.LONECARET]}\\s+`, !0),
          (c.caretTrimReplace = "$1^"),
          m("CARET", `^${o[r.LONECARET]}${o[r.XRANGEPLAIN]}$`),
          m("CARETLOOSE", `^${o[r.LONECARET]}${o[r.XRANGEPLAINLOOSE]}$`),
          m("COMPARATORLOOSE", `^${o[r.GTLT]}\\s*(${o[r.LOOSEPLAIN]})$|^$`),
          m("COMPARATOR", `^${o[r.GTLT]}\\s*(${o[r.FULLPLAIN]})$|^$`),
          m(
            "COMPARATORTRIM",
            `(\\s*)${o[r.GTLT]}\\s*(${o[r.LOOSEPLAIN]}|${o[r.XRANGEPLAIN]})`,
            !0,
          ),
          (c.comparatorTrimReplace = "$1$2$3"),
          m(
            "HYPHENRANGE",
            `^\\s*(${o[r.XRANGEPLAIN]})\\s+-\\s+(${o[r.XRANGEPLAIN]})\\s*$`,
          ),
          m(
            "HYPHENRANGELOOSE",
            `^\\s*(${o[r.XRANGEPLAINLOOSE]})\\s+-\\s+(${o[r.XRANGEPLAINLOOSE]})\\s*$`,
          ),
          m("STAR", "(<|>)?=?\\s*\\*"),
          m("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
          m("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$"));
      })(z, z.exports)),
    z.exports
  );
}
var ae, $r;
function Ke() {
  if ($r) return ae;
  $r = 1;
  const e = Object.freeze({ loose: !0 }),
    c = Object.freeze({});
  return ((ae = (t) => (t ? (typeof t != "object" ? e : t) : c)), ae);
}
var le, Sr;
function mt() {
  if (Sr) return le;
  Sr = 1;
  const e = /^[0-9]+$/,
    c = (t, i) => {
      const d = e.test(t),
        a = e.test(i);
      return (
        d && a && ((t = +t), (i = +i)),
        t === i ? 0 : d && !a ? -1 : a && !d ? 1 : t < i ? -1 : 1
      );
    };
  return (
    (le = { compareIdentifiers: c, rcompareIdentifiers: (t, i) => c(i, t) }),
    le
  );
}
var ce, wr;
function D() {
  if (wr) return ce;
  wr = 1;
  const e = Z(),
    { MAX_LENGTH: c, MAX_SAFE_INTEGER: s } = K(),
    { safeRe: t, t: i } = Y(),
    d = Ke(),
    { compareIdentifiers: a } = mt();
  class f {
    constructor(n, r) {
      if (((r = d(r)), n instanceof f)) {
        if (
          n.loose === !!r.loose &&
          n.includePrerelease === !!r.includePrerelease
        )
          return n;
        n = n.version;
      } else if (typeof n != "string")
        throw new TypeError(
          `Invalid version. Must be a string. Got type "${typeof n}".`,
        );
      if (n.length > c)
        throw new TypeError(`version is longer than ${c} characters`);
      (e("SemVer", n, r),
        (this.options = r),
        (this.loose = !!r.loose),
        (this.includePrerelease = !!r.includePrerelease));
      const l = n.trim().match(r.loose ? t[i.LOOSE] : t[i.FULL]);
      if (!l) throw new TypeError(`Invalid Version: ${n}`);
      if (
        ((this.raw = n),
        (this.major = +l[1]),
        (this.minor = +l[2]),
        (this.patch = +l[3]),
        this.major > s || this.major < 0)
      )
        throw new TypeError("Invalid major version");
      if (this.minor > s || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > s || this.patch < 0)
        throw new TypeError("Invalid patch version");
      (l[4]
        ? (this.prerelease = l[4].split(".").map((u) => {
            if (/^[0-9]+$/.test(u)) {
              const E = +u;
              if (E >= 0 && E < s) return E;
            }
            return u;
          }))
        : (this.prerelease = []),
        (this.build = l[5] ? l[5].split(".") : []),
        this.format());
    }
    format() {
      return (
        (this.version = `${this.major}.${this.minor}.${this.patch}`),
        this.prerelease.length &&
          (this.version += `-${this.prerelease.join(".")}`),
        this.version
      );
    }
    toString() {
      return this.version;
    }
    compare(n) {
      if (
        (e("SemVer.compare", this.version, this.options, n), !(n instanceof f))
      ) {
        if (typeof n == "string" && n === this.version) return 0;
        n = new f(n, this.options);
      }
      return n.version === this.version
        ? 0
        : this.compareMain(n) || this.comparePre(n);
    }
    compareMain(n) {
      return (
        n instanceof f || (n = new f(n, this.options)),
        a(this.major, n.major) ||
          a(this.minor, n.minor) ||
          a(this.patch, n.patch)
      );
    }
    comparePre(n) {
      if (
        (n instanceof f || (n = new f(n, this.options)),
        this.prerelease.length && !n.prerelease.length)
      )
        return -1;
      if (!this.prerelease.length && n.prerelease.length) return 1;
      if (!this.prerelease.length && !n.prerelease.length) return 0;
      let r = 0;
      do {
        const l = this.prerelease[r],
          u = n.prerelease[r];
        if ((e("prerelease compare", r, l, u), l === void 0 && u === void 0))
          return 0;
        if (u === void 0) return 1;
        if (l === void 0) return -1;
        if (l === u) continue;
        return a(l, u);
      } while (++r);
    }
    compareBuild(n) {
      n instanceof f || (n = new f(n, this.options));
      let r = 0;
      do {
        const l = this.build[r],
          u = n.build[r];
        if ((e("build compare", r, l, u), l === void 0 && u === void 0))
          return 0;
        if (u === void 0) return 1;
        if (l === void 0) return -1;
        if (l === u) continue;
        return a(l, u);
      } while (++r);
    }
    inc(n, r, l) {
      if (n.startsWith("pre")) {
        if (!r && l === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (r) {
          const u = `-${r}`.match(
            this.options.loose ? t[i.PRERELEASELOOSE] : t[i.PRERELEASE],
          );
          if (!u || u[1] !== r) throw new Error(`invalid identifier: ${r}`);
        }
      }
      switch (n) {
        case "premajor":
          ((this.prerelease.length = 0),
            (this.patch = 0),
            (this.minor = 0),
            this.major++,
            this.inc("pre", r, l));
          break;
        case "preminor":
          ((this.prerelease.length = 0),
            (this.patch = 0),
            this.minor++,
            this.inc("pre", r, l));
          break;
        case "prepatch":
          ((this.prerelease.length = 0),
            this.inc("patch", r, l),
            this.inc("pre", r, l));
          break;
        case "prerelease":
          (this.prerelease.length === 0 && this.inc("patch", r, l),
            this.inc("pre", r, l));
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          ((this.minor !== 0 ||
            this.patch !== 0 ||
            this.prerelease.length === 0) &&
            this.major++,
            (this.minor = 0),
            (this.patch = 0),
            (this.prerelease = []));
          break;
        case "minor":
          ((this.patch !== 0 || this.prerelease.length === 0) && this.minor++,
            (this.patch = 0),
            (this.prerelease = []));
          break;
        case "patch":
          (this.prerelease.length === 0 && this.patch++,
            (this.prerelease = []));
          break;
        case "pre": {
          const u = Number(l) ? 1 : 0;
          if (this.prerelease.length === 0) this.prerelease = [u];
          else {
            let E = this.prerelease.length;
            for (; --E >= 0; )
              typeof this.prerelease[E] == "number" &&
                (this.prerelease[E]++, (E = -2));
            if (E === -1) {
              if (r === this.prerelease.join(".") && l === !1)
                throw new Error(
                  "invalid increment argument: identifier already exists",
                );
              this.prerelease.push(u);
            }
          }
          if (r) {
            let E = [r, u];
            (l === !1 && (E = [r]),
              a(this.prerelease[0], r) === 0
                ? isNaN(this.prerelease[1]) && (this.prerelease = E)
                : (this.prerelease = E));
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${n}`);
      }
      return (
        (this.raw = this.format()),
        this.build.length && (this.raw += `+${this.build.join(".")}`),
        this
      );
    }
  }
  return ((ce = f), ce);
}
var ue, Or;
function V() {
  if (Or) return ue;
  Or = 1;
  const e = D();
  return (
    (ue = (s, t, i = !1) => {
      if (s instanceof e) return s;
      try {
        return new e(s, t);
      } catch (d) {
        if (!i) return null;
        throw d;
      }
    }),
    ue
  );
}
var fe, Pr;
function Ot() {
  if (Pr) return fe;
  Pr = 1;
  const e = V();
  return (
    (fe = (s, t) => {
      const i = e(s, t);
      return i ? i.version : null;
    }),
    fe
  );
}
var he, br;
function Pt() {
  if (br) return he;
  br = 1;
  const e = V();
  return (
    (he = (s, t) => {
      const i = e(s.trim().replace(/^[=v]+/, ""), t);
      return i ? i.version : null;
    }),
    he
  );
}
var de, Cr;
function bt() {
  if (Cr) return de;
  Cr = 1;
  const e = D();
  return (
    (de = (s, t, i, d, a) => {
      typeof i == "string" && ((a = d), (d = i), (i = void 0));
      try {
        return new e(s instanceof e ? s.version : s, i).inc(t, d, a).version;
      } catch {
        return null;
      }
    }),
    de
  );
}
var me, qr;
function Ct() {
  if (qr) return me;
  qr = 1;
  const e = V();
  return (
    (me = (s, t) => {
      const i = e(s, null, !0),
        d = e(t, null, !0),
        a = i.compare(d);
      if (a === 0) return null;
      const f = a > 0,
        o = f ? i : d,
        n = f ? d : i,
        r = !!o.prerelease.length;
      if (!!n.prerelease.length && !r) {
        if (!n.patch && !n.minor) return "major";
        if (n.compareMain(o) === 0)
          return n.minor && !n.patch ? "minor" : "patch";
      }
      const u = r ? "pre" : "";
      return i.major !== d.major
        ? u + "major"
        : i.minor !== d.minor
          ? u + "minor"
          : i.patch !== d.patch
            ? u + "patch"
            : "prerelease";
    }),
    me
  );
}
var pe, Fr;
function qt() {
  if (Fr) return pe;
  Fr = 1;
  const e = D();
  return ((pe = (s, t) => new e(s, t).major), pe);
}
var Ee, xr;
function Ft() {
  if (xr) return Ee;
  xr = 1;
  const e = D();
  return ((Ee = (s, t) => new e(s, t).minor), Ee);
}
var Re, Dr;
function xt() {
  if (Dr) return Re;
  Dr = 1;
  const e = D();
  return ((Re = (s, t) => new e(s, t).patch), Re);
}
var ge, Xr;
function Dt() {
  if (Xr) return ge;
  Xr = 1;
  const e = V();
  return (
    (ge = (s, t) => {
      const i = e(s, t);
      return i && i.prerelease.length ? i.prerelease : null;
    }),
    ge
  );
}
var ve, _r;
function U() {
  if (_r) return ve;
  _r = 1;
  const e = D();
  return ((ve = (s, t, i) => new e(s, i).compare(new e(t, i))), ve);
}
var Ae, Ur;
function Xt() {
  if (Ur) return Ae;
  Ur = 1;
  const e = U();
  return ((Ae = (s, t, i) => e(t, s, i)), Ae);
}
var Ie, Mr;
function _t() {
  if (Mr) return Ie;
  Mr = 1;
  const e = U();
  return ((Ie = (s, t) => e(s, t, !0)), Ie);
}
var Le, Gr;
function Ze() {
  if (Gr) return Le;
  Gr = 1;
  const e = D();
  return (
    (Le = (s, t, i) => {
      const d = new e(s, i),
        a = new e(t, i);
      return d.compare(a) || d.compareBuild(a);
    }),
    Le
  );
}
var Te, jr;
function Ut() {
  if (jr) return Te;
  jr = 1;
  const e = Ze();
  return ((Te = (s, t) => s.sort((i, d) => e(i, d, t))), Te);
}
var ye, kr;
function Mt() {
  if (kr) return ye;
  kr = 1;
  const e = Ze();
  return ((ye = (s, t) => s.sort((i, d) => e(d, i, t))), ye);
}
var Ne, Vr;
function H() {
  if (Vr) return Ne;
  Vr = 1;
  const e = U();
  return ((Ne = (s, t, i) => e(s, t, i) > 0), Ne);
}
var $e, Br;
function He() {
  if (Br) return $e;
  Br = 1;
  const e = U();
  return (($e = (s, t, i) => e(s, t, i) < 0), $e);
}
var Se, Wr;
function pt() {
  if (Wr) return Se;
  Wr = 1;
  const e = U();
  return ((Se = (s, t, i) => e(s, t, i) === 0), Se);
}
var we, Yr;
function Et() {
  if (Yr) return we;
  Yr = 1;
  const e = U();
  return ((we = (s, t, i) => e(s, t, i) !== 0), we);
}
var Oe, zr;
function Qe() {
  if (zr) return Oe;
  zr = 1;
  const e = U();
  return ((Oe = (s, t, i) => e(s, t, i) >= 0), Oe);
}
var Pe, Jr;
function er() {
  if (Jr) return Pe;
  Jr = 1;
  const e = U();
  return ((Pe = (s, t, i) => e(s, t, i) <= 0), Pe);
}
var be, Kr;
function Rt() {
  if (Kr) return be;
  Kr = 1;
  const e = pt(),
    c = Et(),
    s = H(),
    t = Qe(),
    i = He(),
    d = er();
  return (
    (be = (f, o, n, r) => {
      switch (o) {
        case "===":
          return (
            typeof f == "object" && (f = f.version),
            typeof n == "object" && (n = n.version),
            f === n
          );
        case "!==":
          return (
            typeof f == "object" && (f = f.version),
            typeof n == "object" && (n = n.version),
            f !== n
          );
        case "":
        case "=":
        case "==":
          return e(f, n, r);
        case "!=":
          return c(f, n, r);
        case ">":
          return s(f, n, r);
        case ">=":
          return t(f, n, r);
        case "<":
          return i(f, n, r);
        case "<=":
          return d(f, n, r);
        default:
          throw new TypeError(`Invalid operator: ${o}`);
      }
    }),
    be
  );
}
var Ce, Zr;
function Gt() {
  if (Zr) return Ce;
  Zr = 1;
  const e = D(),
    c = V(),
    { safeRe: s, t } = Y();
  return (
    (Ce = (d, a) => {
      if (d instanceof e) return d;
      if ((typeof d == "number" && (d = String(d)), typeof d != "string"))
        return null;
      a = a || {};
      let f = null;
      if (!a.rtl)
        f = d.match(a.includePrerelease ? s[t.COERCEFULL] : s[t.COERCE]);
      else {
        const E = a.includePrerelease ? s[t.COERCERTLFULL] : s[t.COERCERTL];
        let N;
        for (; (N = E.exec(d)) && (!f || f.index + f[0].length !== d.length); )
          ((!f || N.index + N[0].length !== f.index + f[0].length) && (f = N),
            (E.lastIndex = N.index + N[1].length + N[2].length));
        E.lastIndex = -1;
      }
      if (f === null) return null;
      const o = f[2],
        n = f[3] || "0",
        r = f[4] || "0",
        l = a.includePrerelease && f[5] ? `-${f[5]}` : "",
        u = a.includePrerelease && f[6] ? `+${f[6]}` : "";
      return c(`${o}.${n}.${r}${l}${u}`, a);
    }),
    Ce
  );
}
var qe, Hr;
function jt() {
  if (Hr) return qe;
  Hr = 1;
  class e {
    constructor() {
      ((this.max = 1e3), (this.map = new Map()));
    }
    get(s) {
      const t = this.map.get(s);
      if (t !== void 0) return (this.map.delete(s), this.map.set(s, t), t);
    }
    delete(s) {
      return this.map.delete(s);
    }
    set(s, t) {
      if (!this.delete(s) && t !== void 0) {
        if (this.map.size >= this.max) {
          const d = this.map.keys().next().value;
          this.delete(d);
        }
        this.map.set(s, t);
      }
      return this;
    }
  }
  return ((qe = e), qe);
}
var Fe, Qr;
function M() {
  if (Qr) return Fe;
  Qr = 1;
  const e = /\s+/g;
  class c {
    constructor(h, v) {
      if (((v = i(v)), h instanceof c))
        return h.loose === !!v.loose &&
          h.includePrerelease === !!v.includePrerelease
          ? h
          : new c(h.raw, v);
      if (h instanceof d)
        return (
          (this.raw = h.value),
          (this.set = [[h]]),
          (this.formatted = void 0),
          this
        );
      if (
        ((this.options = v),
        (this.loose = !!v.loose),
        (this.includePrerelease = !!v.includePrerelease),
        (this.raw = h.trim().replace(e, " ")),
        (this.set = this.raw
          .split("||")
          .map((R) => this.parseRange(R.trim()))
          .filter((R) => R.length)),
        !this.set.length)
      )
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const R = this.set[0];
        if (
          ((this.set = this.set.filter((A) => !m(A[0]))), this.set.length === 0)
        )
          this.set = [R];
        else if (this.set.length > 1) {
          for (const A of this.set)
            if (A.length === 1 && y(A[0])) {
              this.set = [A];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let h = 0; h < this.set.length; h++) {
          h > 0 && (this.formatted += "||");
          const v = this.set[h];
          for (let R = 0; R < v.length; R++)
            (R > 0 && (this.formatted += " "),
              (this.formatted += v[R].toString().trim()));
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(h) {
      const R =
          ((this.options.includePrerelease && E) | (this.options.loose && N)) +
          ":" +
          h,
        A = t.get(R);
      if (A) return A;
      const g = this.options.loose,
        I = g ? o[n.HYPHENRANGELOOSE] : o[n.HYPHENRANGE];
      ((h = h.replace(I, ne(this.options.includePrerelease))),
        a("hyphen replace", h),
        (h = h.replace(o[n.COMPARATORTRIM], r)),
        a("comparator trim", h),
        (h = h.replace(o[n.TILDETRIM], l)),
        a("tilde trim", h),
        (h = h.replace(o[n.CARETTRIM], u)),
        a("caret trim", h));
      let $ = h
        .split(" ")
        .map((b) => q(b, this.options))
        .join(" ")
        .split(/\s+/)
        .map((b) => te(b, this.options));
      (g &&
        ($ = $.filter(
          (b) => (
            a("loose invalid filter", b, this.options),
            !!b.match(o[n.COMPARATORLOOSE])
          ),
        )),
        a("range list", $));
      const T = new Map(),
        O = $.map((b) => new d(b, this.options));
      for (const b of O) {
        if (m(b)) return [b];
        T.set(b.value, b);
      }
      T.size > 1 && T.has("") && T.delete("");
      const x = [...T.values()];
      return (t.set(R, x), x);
    }
    intersects(h, v) {
      if (!(h instanceof c)) throw new TypeError("a Range is required");
      return this.set.some(
        (R) =>
          S(R, v) &&
          h.set.some(
            (A) =>
              S(A, v) && R.every((g) => A.every((I) => g.intersects(I, v))),
          ),
      );
    }
    test(h) {
      if (!h) return !1;
      if (typeof h == "string")
        try {
          h = new f(h, this.options);
        } catch {
          return !1;
        }
      for (let v = 0; v < this.set.length; v++)
        if (se(this.set[v], h, this.options)) return !0;
      return !1;
    }
  }
  Fe = c;
  const s = jt(),
    t = new s(),
    i = Ke(),
    d = Q(),
    a = Z(),
    f = D(),
    {
      safeRe: o,
      t: n,
      comparatorTrimReplace: r,
      tildeTrimReplace: l,
      caretTrimReplace: u,
    } = Y(),
    { FLAG_INCLUDE_PRERELEASE: E, FLAG_LOOSE: N } = K(),
    m = (p) => p.value === "<0.0.0-0",
    y = (p) => p.value === "",
    S = (p, h) => {
      let v = !0;
      const R = p.slice();
      let A = R.pop();
      for (; v && R.length; )
        ((v = R.every((g) => A.intersects(g, h))), (A = R.pop()));
      return v;
    },
    q = (p, h) => (
      a("comp", p, h),
      (p = P(p, h)),
      a("caret", p),
      (p = F(p, h)),
      a("tildes", p),
      (p = L(p, h)),
      a("xrange", p),
      (p = re(p, h)),
      a("stars", p),
      p
    ),
    w = (p) => !p || p.toLowerCase() === "x" || p === "*",
    F = (p, h) =>
      p
        .trim()
        .split(/\s+/)
        .map((v) => X(v, h))
        .join(" "),
    X = (p, h) => {
      const v = h.loose ? o[n.TILDELOOSE] : o[n.TILDE];
      return p.replace(v, (R, A, g, I, $) => {
        a("tilde", p, R, A, g, I, $);
        let T;
        return (
          w(A)
            ? (T = "")
            : w(g)
              ? (T = `>=${A}.0.0 <${+A + 1}.0.0-0`)
              : w(I)
                ? (T = `>=${A}.${g}.0 <${A}.${+g + 1}.0-0`)
                : $
                  ? (a("replaceTilde pr", $),
                    (T = `>=${A}.${g}.${I}-${$} <${A}.${+g + 1}.0-0`))
                  : (T = `>=${A}.${g}.${I} <${A}.${+g + 1}.0-0`),
          a("tilde return", T),
          T
        );
      });
    },
    P = (p, h) =>
      p
        .trim()
        .split(/\s+/)
        .map((v) => C(v, h))
        .join(" "),
    C = (p, h) => {
      a("caret", p, h);
      const v = h.loose ? o[n.CARETLOOSE] : o[n.CARET],
        R = h.includePrerelease ? "-0" : "";
      return p.replace(v, (A, g, I, $, T) => {
        a("caret", p, A, g, I, $, T);
        let O;
        return (
          w(g)
            ? (O = "")
            : w(I)
              ? (O = `>=${g}.0.0${R} <${+g + 1}.0.0-0`)
              : w($)
                ? g === "0"
                  ? (O = `>=${g}.${I}.0${R} <${g}.${+I + 1}.0-0`)
                  : (O = `>=${g}.${I}.0${R} <${+g + 1}.0.0-0`)
                : T
                  ? (a("replaceCaret pr", T),
                    g === "0"
                      ? I === "0"
                        ? (O = `>=${g}.${I}.${$}-${T} <${g}.${I}.${+$ + 1}-0`)
                        : (O = `>=${g}.${I}.${$}-${T} <${g}.${+I + 1}.0-0`)
                      : (O = `>=${g}.${I}.${$}-${T} <${+g + 1}.0.0-0`))
                  : (a("no pr"),
                    g === "0"
                      ? I === "0"
                        ? (O = `>=${g}.${I}.${$}${R} <${g}.${I}.${+$ + 1}-0`)
                        : (O = `>=${g}.${I}.${$}${R} <${g}.${+I + 1}.0-0`)
                      : (O = `>=${g}.${I}.${$} <${+g + 1}.0.0-0`)),
          a("caret return", O),
          O
        );
      });
    },
    L = (p, h) => (
      a("replaceXRanges", p, h),
      p
        .split(/\s+/)
        .map((v) => B(v, h))
        .join(" ")
    ),
    B = (p, h) => {
      p = p.trim();
      const v = h.loose ? o[n.XRANGELOOSE] : o[n.XRANGE];
      return p.replace(v, (R, A, g, I, $, T) => {
        a("xRange", p, R, A, g, I, $, T);
        const O = w(g),
          x = O || w(I),
          b = x || w($),
          W = b;
        return (
          A === "=" && W && (A = ""),
          (T = h.includePrerelease ? "-0" : ""),
          O
            ? A === ">" || A === "<"
              ? (R = "<0.0.0-0")
              : (R = "*")
            : A && W
              ? (x && (I = 0),
                ($ = 0),
                A === ">"
                  ? ((A = ">="),
                    x
                      ? ((g = +g + 1), (I = 0), ($ = 0))
                      : ((I = +I + 1), ($ = 0)))
                  : A === "<=" && ((A = "<"), x ? (g = +g + 1) : (I = +I + 1)),
                A === "<" && (T = "-0"),
                (R = `${A + g}.${I}.${$}${T}`))
              : x
                ? (R = `>=${g}.0.0${T} <${+g + 1}.0.0-0`)
                : b && (R = `>=${g}.${I}.0${T} <${g}.${+I + 1}.0-0`),
          a("xRange return", R),
          R
        );
      });
    },
    re = (p, h) => (a("replaceStars", p, h), p.trim().replace(o[n.STAR], "")),
    te = (p, h) => (
      a("replaceGTE0", p, h),
      p.trim().replace(o[h.includePrerelease ? n.GTE0PRE : n.GTE0], "")
    ),
    ne = (p) => (h, v, R, A, g, I, $, T, O, x, b, W) => (
      w(R)
        ? (v = "")
        : w(A)
          ? (v = `>=${R}.0.0${p ? "-0" : ""}`)
          : w(g)
            ? (v = `>=${R}.${A}.0${p ? "-0" : ""}`)
            : I
              ? (v = `>=${v}`)
              : (v = `>=${v}${p ? "-0" : ""}`),
      w(O)
        ? (T = "")
        : w(x)
          ? (T = `<${+O + 1}.0.0-0`)
          : w(b)
            ? (T = `<${O}.${+x + 1}.0-0`)
            : W
              ? (T = `<=${O}.${x}.${b}-${W}`)
              : p
                ? (T = `<${O}.${x}.${+b + 1}-0`)
                : (T = `<=${T}`),
      `${v} ${T}`.trim()
    ),
    se = (p, h, v) => {
      for (let R = 0; R < p.length; R++) if (!p[R].test(h)) return !1;
      if (h.prerelease.length && !v.includePrerelease) {
        for (let R = 0; R < p.length; R++)
          if (
            (a(p[R].semver),
            p[R].semver !== d.ANY && p[R].semver.prerelease.length > 0)
          ) {
            const A = p[R].semver;
            if (
              A.major === h.major &&
              A.minor === h.minor &&
              A.patch === h.patch
            )
              return !0;
          }
        return !1;
      }
      return !0;
    };
  return Fe;
}
var xe, et;
function Q() {
  if (et) return xe;
  et = 1;
  const e = Symbol("SemVer ANY");
  class c {
    static get ANY() {
      return e;
    }
    constructor(r, l) {
      if (((l = s(l)), r instanceof c)) {
        if (r.loose === !!l.loose) return r;
        r = r.value;
      }
      ((r = r.trim().split(/\s+/).join(" ")),
        a("comparator", r, l),
        (this.options = l),
        (this.loose = !!l.loose),
        this.parse(r),
        this.semver === e
          ? (this.value = "")
          : (this.value = this.operator + this.semver.version),
        a("comp", this));
    }
    parse(r) {
      const l = this.options.loose ? t[i.COMPARATORLOOSE] : t[i.COMPARATOR],
        u = r.match(l);
      if (!u) throw new TypeError(`Invalid comparator: ${r}`);
      ((this.operator = u[1] !== void 0 ? u[1] : ""),
        this.operator === "=" && (this.operator = ""),
        u[2]
          ? (this.semver = new f(u[2], this.options.loose))
          : (this.semver = e));
    }
    toString() {
      return this.value;
    }
    test(r) {
      if (
        (a("Comparator.test", r, this.options.loose),
        this.semver === e || r === e)
      )
        return !0;
      if (typeof r == "string")
        try {
          r = new f(r, this.options);
        } catch {
          return !1;
        }
      return d(r, this.operator, this.semver, this.options);
    }
    intersects(r, l) {
      if (!(r instanceof c)) throw new TypeError("a Comparator is required");
      return this.operator === ""
        ? this.value === ""
          ? !0
          : new o(r.value, l).test(this.value)
        : r.operator === ""
          ? r.value === ""
            ? !0
            : new o(this.value, l).test(r.semver)
          : ((l = s(l)),
            (l.includePrerelease &&
              (this.value === "<0.0.0-0" || r.value === "<0.0.0-0")) ||
            (!l.includePrerelease &&
              (this.value.startsWith("<0.0.0") || r.value.startsWith("<0.0.0")))
              ? !1
              : !!(
                  (this.operator.startsWith(">") &&
                    r.operator.startsWith(">")) ||
                  (this.operator.startsWith("<") &&
                    r.operator.startsWith("<")) ||
                  (this.semver.version === r.semver.version &&
                    this.operator.includes("=") &&
                    r.operator.includes("=")) ||
                  (d(this.semver, "<", r.semver, l) &&
                    this.operator.startsWith(">") &&
                    r.operator.startsWith("<")) ||
                  (d(this.semver, ">", r.semver, l) &&
                    this.operator.startsWith("<") &&
                    r.operator.startsWith(">"))
                ));
    }
  }
  xe = c;
  const s = Ke(),
    { safeRe: t, t: i } = Y(),
    d = Rt(),
    a = Z(),
    f = D(),
    o = M();
  return xe;
}
var De, rt;
function ee() {
  if (rt) return De;
  rt = 1;
  const e = M();
  return (
    (De = (s, t, i) => {
      try {
        t = new e(t, i);
      } catch {
        return !1;
      }
      return t.test(s);
    }),
    De
  );
}
var Xe, tt;
function kt() {
  if (tt) return Xe;
  tt = 1;
  const e = M();
  return (
    (Xe = (s, t) =>
      new e(s, t).set.map((i) =>
        i
          .map((d) => d.value)
          .join(" ")
          .trim()
          .split(" "),
      )),
    Xe
  );
}
var _e, nt;
function Vt() {
  if (nt) return _e;
  nt = 1;
  const e = D(),
    c = M();
  return (
    (_e = (t, i, d) => {
      let a = null,
        f = null,
        o = null;
      try {
        o = new c(i, d);
      } catch {
        return null;
      }
      return (
        t.forEach((n) => {
          o.test(n) &&
            (!a || f.compare(n) === -1) &&
            ((a = n), (f = new e(a, d)));
        }),
        a
      );
    }),
    _e
  );
}
var Ue, st;
function Bt() {
  if (st) return Ue;
  st = 1;
  const e = D(),
    c = M();
  return (
    (Ue = (t, i, d) => {
      let a = null,
        f = null,
        o = null;
      try {
        o = new c(i, d);
      } catch {
        return null;
      }
      return (
        t.forEach((n) => {
          o.test(n) &&
            (!a || f.compare(n) === 1) &&
            ((a = n), (f = new e(a, d)));
        }),
        a
      );
    }),
    Ue
  );
}
var Me, it;
function Wt() {
  if (it) return Me;
  it = 1;
  const e = D(),
    c = M(),
    s = H();
  return (
    (Me = (i, d) => {
      i = new c(i, d);
      let a = new e("0.0.0");
      if (i.test(a) || ((a = new e("0.0.0-0")), i.test(a))) return a;
      a = null;
      for (let f = 0; f < i.set.length; ++f) {
        const o = i.set[f];
        let n = null;
        (o.forEach((r) => {
          const l = new e(r.semver.version);
          switch (r.operator) {
            case ">":
              (l.prerelease.length === 0 ? l.patch++ : l.prerelease.push(0),
                (l.raw = l.format()));
            case "":
            case ">=":
              (!n || s(l, n)) && (n = l);
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${r.operator}`);
          }
        }),
          n && (!a || s(a, n)) && (a = n));
      }
      return a && i.test(a) ? a : null;
    }),
    Me
  );
}
var Ge, ot;
function Yt() {
  if (ot) return Ge;
  ot = 1;
  const e = M();
  return (
    (Ge = (s, t) => {
      try {
        return new e(s, t).range || "*";
      } catch {
        return null;
      }
    }),
    Ge
  );
}
var je, at;
function rr() {
  if (at) return je;
  at = 1;
  const e = D(),
    c = Q(),
    { ANY: s } = c,
    t = M(),
    i = ee(),
    d = H(),
    a = He(),
    f = er(),
    o = Qe();
  return (
    (je = (r, l, u, E) => {
      ((r = new e(r, E)), (l = new t(l, E)));
      let N, m, y, S, q;
      switch (u) {
        case ">":
          ((N = d), (m = f), (y = a), (S = ">"), (q = ">="));
          break;
        case "<":
          ((N = a), (m = o), (y = d), (S = "<"), (q = "<="));
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (i(r, l, E)) return !1;
      for (let w = 0; w < l.set.length; ++w) {
        const F = l.set[w];
        let X = null,
          P = null;
        if (
          (F.forEach((C) => {
            (C.semver === s && (C = new c(">=0.0.0")),
              (X = X || C),
              (P = P || C),
              N(C.semver, X.semver, E)
                ? (X = C)
                : y(C.semver, P.semver, E) && (P = C));
          }),
          X.operator === S ||
            X.operator === q ||
            ((!P.operator || P.operator === S) && m(r, P.semver)))
        )
          return !1;
        if (P.operator === q && y(r, P.semver)) return !1;
      }
      return !0;
    }),
    je
  );
}
var ke, lt;
function zt() {
  if (lt) return ke;
  lt = 1;
  const e = rr();
  return ((ke = (s, t, i) => e(s, t, ">", i)), ke);
}
var Ve, ct;
function Jt() {
  if (ct) return Ve;
  ct = 1;
  const e = rr();
  return ((Ve = (s, t, i) => e(s, t, "<", i)), Ve);
}
var Be, ut;
function Kt() {
  if (ut) return Be;
  ut = 1;
  const e = M();
  return (
    (Be = (s, t, i) => (
      (s = new e(s, i)),
      (t = new e(t, i)),
      s.intersects(t, i)
    )),
    Be
  );
}
var We, ft;
function Zt() {
  if (ft) return We;
  ft = 1;
  const e = ee(),
    c = U();
  return (
    (We = (s, t, i) => {
      const d = [];
      let a = null,
        f = null;
      const o = s.sort((u, E) => c(u, E, i));
      for (const u of o)
        e(u, t, i)
          ? ((f = u), a || (a = u))
          : (f && d.push([a, f]), (f = null), (a = null));
      a && d.push([a, null]);
      const n = [];
      for (const [u, E] of d)
        u === E
          ? n.push(u)
          : !E && u === o[0]
            ? n.push("*")
            : E
              ? u === o[0]
                ? n.push(`<=${E}`)
                : n.push(`${u} - ${E}`)
              : n.push(`>=${u}`);
      const r = n.join(" || "),
        l = typeof t.raw == "string" ? t.raw : String(t);
      return r.length < l.length ? r : t;
    }),
    We
  );
}
var Ye, ht;
function Ht() {
  if (ht) return Ye;
  ht = 1;
  const e = M(),
    c = Q(),
    { ANY: s } = c,
    t = ee(),
    i = U(),
    d = (l, u, E = {}) => {
      if (l === u) return !0;
      ((l = new e(l, E)), (u = new e(u, E)));
      let N = !1;
      e: for (const m of l.set) {
        for (const y of u.set) {
          const S = o(m, y, E);
          if (((N = N || S !== null), S)) continue e;
        }
        if (N) return !1;
      }
      return !0;
    },
    a = [new c(">=0.0.0-0")],
    f = [new c(">=0.0.0")],
    o = (l, u, E) => {
      if (l === u) return !0;
      if (l.length === 1 && l[0].semver === s) {
        if (u.length === 1 && u[0].semver === s) return !0;
        E.includePrerelease ? (l = a) : (l = f);
      }
      if (u.length === 1 && u[0].semver === s) {
        if (E.includePrerelease) return !0;
        u = f;
      }
      const N = new Set();
      let m, y;
      for (const L of l)
        L.operator === ">" || L.operator === ">="
          ? (m = n(m, L, E))
          : L.operator === "<" || L.operator === "<="
            ? (y = r(y, L, E))
            : N.add(L.semver);
      if (N.size > 1) return null;
      let S;
      if (m && y) {
        if (((S = i(m.semver, y.semver, E)), S > 0)) return null;
        if (S === 0 && (m.operator !== ">=" || y.operator !== "<="))
          return null;
      }
      for (const L of N) {
        if ((m && !t(L, String(m), E)) || (y && !t(L, String(y), E)))
          return null;
        for (const B of u) if (!t(L, String(B), E)) return !1;
        return !0;
      }
      let q,
        w,
        F,
        X,
        P =
          y && !E.includePrerelease && y.semver.prerelease.length
            ? y.semver
            : !1,
        C =
          m && !E.includePrerelease && m.semver.prerelease.length
            ? m.semver
            : !1;
      P &&
        P.prerelease.length === 1 &&
        y.operator === "<" &&
        P.prerelease[0] === 0 &&
        (P = !1);
      for (const L of u) {
        if (
          ((X = X || L.operator === ">" || L.operator === ">="),
          (F = F || L.operator === "<" || L.operator === "<="),
          m)
        ) {
          if (
            (C &&
              L.semver.prerelease &&
              L.semver.prerelease.length &&
              L.semver.major === C.major &&
              L.semver.minor === C.minor &&
              L.semver.patch === C.patch &&
              (C = !1),
            L.operator === ">" || L.operator === ">=")
          ) {
            if (((q = n(m, L, E)), q === L && q !== m)) return !1;
          } else if (m.operator === ">=" && !t(m.semver, String(L), E))
            return !1;
        }
        if (y) {
          if (
            (P &&
              L.semver.prerelease &&
              L.semver.prerelease.length &&
              L.semver.major === P.major &&
              L.semver.minor === P.minor &&
              L.semver.patch === P.patch &&
              (P = !1),
            L.operator === "<" || L.operator === "<=")
          ) {
            if (((w = r(y, L, E)), w === L && w !== y)) return !1;
          } else if (y.operator === "<=" && !t(y.semver, String(L), E))
            return !1;
        }
        if (!L.operator && (y || m) && S !== 0) return !1;
      }
      return !(
        (m && F && !y && S !== 0) ||
        (y && X && !m && S !== 0) ||
        C ||
        P
      );
    },
    n = (l, u, E) => {
      if (!l) return u;
      const N = i(l.semver, u.semver, E);
      return N > 0
        ? l
        : N < 0 || (u.operator === ">" && l.operator === ">=")
          ? u
          : l;
    },
    r = (l, u, E) => {
      if (!l) return u;
      const N = i(l.semver, u.semver, E);
      return N < 0
        ? l
        : N > 0 || (u.operator === "<" && l.operator === "<=")
          ? u
          : l;
    };
  return ((Ye = d), Ye);
}
var ze, dt;
function Qt() {
  if (dt) return ze;
  dt = 1;
  const e = Y(),
    c = K(),
    s = D(),
    t = mt(),
    i = V(),
    d = Ot(),
    a = Pt(),
    f = bt(),
    o = Ct(),
    n = qt(),
    r = Ft(),
    l = xt(),
    u = Dt(),
    E = U(),
    N = Xt(),
    m = _t(),
    y = Ze(),
    S = Ut(),
    q = Mt(),
    w = H(),
    F = He(),
    X = pt(),
    P = Et(),
    C = Qe(),
    L = er(),
    B = Rt(),
    re = Gt(),
    te = Q(),
    ne = M(),
    se = ee(),
    p = kt(),
    h = Vt(),
    v = Bt(),
    R = Wt(),
    A = Yt(),
    g = rr(),
    I = zt(),
    $ = Jt(),
    T = Kt(),
    O = Zt(),
    x = Ht();
  return (
    (ze = {
      parse: i,
      valid: d,
      clean: a,
      inc: f,
      diff: o,
      major: n,
      minor: r,
      patch: l,
      prerelease: u,
      compare: E,
      rcompare: N,
      compareLoose: m,
      compareBuild: y,
      sort: S,
      rsort: q,
      gt: w,
      lt: F,
      eq: X,
      neq: P,
      gte: C,
      lte: L,
      cmp: B,
      coerce: re,
      Comparator: te,
      Range: ne,
      satisfies: se,
      toComparators: p,
      maxSatisfying: h,
      minSatisfying: v,
      minVersion: R,
      validRange: A,
      outside: g,
      gtr: I,
      ltr: $,
      intersects: T,
      simplifyRange: O,
      subset: x,
      SemVer: s,
      re: e.re,
      src: e.src,
      tokens: e.t,
      SEMVER_SPEC_VERSION: c.SEMVER_SPEC_VERSION,
      RELEASE_TYPES: c.RELEASE_TYPES,
      compareIdentifiers: t.compareIdentifiers,
      rcompareIdentifiers: t.rcompareIdentifiers,
    }),
    ze
  );
}
Qt();
const en = JSON.parse(
    '{"ActionMenu":{"Actions":{"moreActions":"More actions"},"RollupActions":{"rollupButton":"View actions"}},"ActionList":{"SearchField":{"clearButtonLabel":"Clear","search":"Search","placeholder":"Search actions"}},"Avatar":{"label":"Avatar","labelWithInitials":"Avatar with initials {initials}"},"Autocomplete":{"spinnerAccessibilityLabel":"Loading","ellipsis":"{content}…"},"Badge":{"PROGRESS_LABELS":{"incomplete":"Incomplete","partiallyComplete":"Partially complete","complete":"Complete"},"TONE_LABELS":{"info":"Info","success":"Success","warning":"Warning","critical":"Critical","attention":"Attention","new":"New","readOnly":"Read-only","enabled":"Enabled"},"progressAndTone":"{toneLabel} {progressLabel}"},"Banner":{"dismissButton":"Dismiss notification"},"Button":{"spinnerAccessibilityLabel":"Loading"},"Common":{"checkbox":"checkbox","undo":"Undo","cancel":"Cancel","clear":"Clear","close":"Close","submit":"Submit","more":"More"},"ContextualSaveBar":{"save":"Save","discard":"Discard"},"DataTable":{"sortAccessibilityLabel":"sort {direction} by","navAccessibilityLabel":"Scroll table {direction} one column","totalsRowHeading":"Totals","totalRowHeading":"Total"},"DatePicker":{"previousMonth":"Show previous month, {previousMonthName} {showPreviousYear}","nextMonth":"Show next month, {nextMonth} {nextYear}","today":"Today ","start":"Start of range","end":"End of range","months":{"january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December"},"days":{"monday":"Monday","tuesday":"Tuesday","wednesday":"Wednesday","thursday":"Thursday","friday":"Friday","saturday":"Saturday","sunday":"Sunday"},"daysAbbreviated":{"monday":"Mo","tuesday":"Tu","wednesday":"We","thursday":"Th","friday":"Fr","saturday":"Sa","sunday":"Su"}},"DiscardConfirmationModal":{"title":"Discard all unsaved changes","message":"If you discard changes, you’ll delete any edits you made since you last saved.","primaryAction":"Discard changes","secondaryAction":"Continue editing"},"DropZone":{"single":{"overlayTextFile":"Drop file to upload","overlayTextImage":"Drop image to upload","overlayTextVideo":"Drop video to upload","actionTitleFile":"Add file","actionTitleImage":"Add image","actionTitleVideo":"Add video","actionHintFile":"or drop file to upload","actionHintImage":"or drop image to upload","actionHintVideo":"or drop video to upload","labelFile":"Upload file","labelImage":"Upload image","labelVideo":"Upload video"},"allowMultiple":{"overlayTextFile":"Drop files to upload","overlayTextImage":"Drop images to upload","overlayTextVideo":"Drop videos to upload","actionTitleFile":"Add files","actionTitleImage":"Add images","actionTitleVideo":"Add videos","actionHintFile":"or drop files to upload","actionHintImage":"or drop images to upload","actionHintVideo":"or drop videos to upload","labelFile":"Upload files","labelImage":"Upload images","labelVideo":"Upload videos"},"errorOverlayTextFile":"File type is not valid","errorOverlayTextImage":"Image type is not valid","errorOverlayTextVideo":"Video type is not valid"},"EmptySearchResult":{"altText":"Empty search results"},"Frame":{"skipToContent":"Skip to content","navigationLabel":"Navigation","Navigation":{"closeMobileNavigationLabel":"Close navigation"}},"FullscreenBar":{"back":"Back","accessibilityLabel":"Exit fullscreen mode"},"Filters":{"moreFilters":"More filters","moreFiltersWithCount":"More filters ({count})","filter":"Filter {resourceName}","noFiltersApplied":"No filters applied","cancel":"Cancel","done":"Done","clearAllFilters":"Clear all filters","clear":"Clear","clearLabel":"Clear {filterName}","addFilter":"Add filter","clearFilters":"Clear all","searchInView":"in:{viewName}"},"FilterPill":{"clear":"Clear","unsavedChanges":"Unsaved changes - {label}"},"IndexFilters":{"searchFilterTooltip":"Search and filter","searchFilterTooltipWithShortcut":"Search and filter (F)","searchFilterAccessibilityLabel":"Search and filter results","sort":"Sort your results","addView":"Add a new view","newView":"Custom search","SortButton":{"ariaLabel":"Sort the results","tooltip":"Sort","title":"Sort by","sorting":{"asc":"Ascending","desc":"Descending","az":"A-Z","za":"Z-A"}},"EditColumnsButton":{"tooltip":"Edit columns","accessibilityLabel":"Customize table column order and visibility"},"UpdateButtons":{"cancel":"Cancel","update":"Update","save":"Save","saveAs":"Save as","modal":{"title":"Save view as","label":"Name","sameName":"A view with this name already exists. Please choose a different name.","save":"Save","cancel":"Cancel"}}},"IndexProvider":{"defaultItemSingular":"Item","defaultItemPlural":"Items","allItemsSelected":"All {itemsLength}+ {resourceNamePlural} are selected","selected":"{selectedItemsCount} selected","a11yCheckboxDeselectAllSingle":"Deselect {resourceNameSingular}","a11yCheckboxSelectAllSingle":"Select {resourceNameSingular}","a11yCheckboxDeselectAllMultiple":"Deselect all {itemsLength} {resourceNamePlural}","a11yCheckboxSelectAllMultiple":"Select all {itemsLength} {resourceNamePlural}"},"IndexTable":{"emptySearchTitle":"No {resourceNamePlural} found","emptySearchDescription":"Try changing the filters or search term","onboardingBadgeText":"New","resourceLoadingAccessibilityLabel":"Loading {resourceNamePlural}…","selectAllLabel":"Select all {resourceNamePlural}","selected":"{selectedItemsCount} selected","undo":"Undo","selectAllItems":"Select all {itemsLength}+ {resourceNamePlural}","selectItem":"Select {resourceName}","selectButtonText":"Select","sortAccessibilityLabel":"sort {direction} by"},"Loading":{"label":"Page loading bar"},"Modal":{"iFrameTitle":"body markup","modalWarning":"These required properties are missing from Modal: {missingProps}"},"Page":{"Header":{"rollupActionsLabel":"View actions for {title}","pageReadyAccessibilityLabel":"{title}. This page is ready"}},"Pagination":{"previous":"Previous","next":"Next","pagination":"Pagination"},"ProgressBar":{"negativeWarningMessage":"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.","exceedWarningMessage":"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100."},"ResourceList":{"sortingLabel":"Sort by","defaultItemSingular":"item","defaultItemPlural":"items","showing":"Showing {itemsCount} {resource}","showingTotalCount":"Showing {itemsCount} of {totalItemsCount} {resource}","loading":"Loading {resource}","selected":"{selectedItemsCount} selected","allItemsSelected":"All {itemsLength}+ {resourceNamePlural} in your store are selected","allFilteredItemsSelected":"All {itemsLength}+ {resourceNamePlural} in this filter are selected","selectAllItems":"Select all {itemsLength}+ {resourceNamePlural} in your store","selectAllFilteredItems":"Select all {itemsLength}+ {resourceNamePlural} in this filter","emptySearchResultTitle":"No {resourceNamePlural} found","emptySearchResultDescription":"Try changing the filters or search term","selectButtonText":"Select","a11yCheckboxDeselectAllSingle":"Deselect {resourceNameSingular}","a11yCheckboxSelectAllSingle":"Select {resourceNameSingular}","a11yCheckboxDeselectAllMultiple":"Deselect all {itemsLength} {resourceNamePlural}","a11yCheckboxSelectAllMultiple":"Select all {itemsLength} {resourceNamePlural}","Item":{"actionsDropdownLabel":"Actions for {accessibilityLabel}","actionsDropdown":"Actions dropdown","viewItem":"View details for {itemName}"},"BulkActions":{"actionsActivatorLabel":"Actions","moreActionsActivatorLabel":"More actions"}},"SkeletonPage":{"loadingLabel":"Page loading"},"Tabs":{"newViewAccessibilityLabel":"Create new view","newViewTooltip":"Create view","toggleTabsLabel":"More views","Tab":{"rename":"Rename view","duplicate":"Duplicate view","edit":"Edit view","editColumns":"Edit columns","delete":"Delete view","copy":"Copy of {name}","deleteModal":{"title":"Delete view?","description":"This can’t be undone. {viewName} view will no longer be available in your admin.","cancel":"Cancel","delete":"Delete view"}},"RenameModal":{"title":"Rename view","label":"Name","cancel":"Cancel","create":"Save","errors":{"sameName":"A view with this name already exists. Please choose a different name."}},"DuplicateModal":{"title":"Duplicate view","label":"Name","cancel":"Cancel","create":"Create view","errors":{"sameName":"A view with this name already exists. Please choose a different name."}},"CreateViewModal":{"title":"Create new view","label":"Name","cancel":"Cancel","create":"Create view","errors":{"sameName":"A view with this name already exists. Please choose a different name."}}},"Tag":{"ariaLabel":"Remove {children}"},"TextField":{"characterCount":"{count} characters","characterCountWithMaxLength":"{count} of {limit} characters used"},"TooltipOverlay":{"accessibilityLabel":"Tooltip: {label}"},"TopBar":{"toggleMenuLabel":"Toggle menu","SearchField":{"clearButtonLabel":"Clear","search":"Search"}},"MediaCard":{"dismissButton":"Dismiss","popoverButton":"Actions"},"VideoThumbnail":{"playButtonA11yLabel":{"default":"Play video","defaultWithDuration":"Play video of length {duration}","duration":{"hours":{"other":{"only":"{hourCount} hours","andMinutes":"{hourCount} hours and {minuteCount} minutes","andMinute":"{hourCount} hours and {minuteCount} minute","minutesAndSeconds":"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds","minutesAndSecond":"{hourCount} hours, {minuteCount} minutes, and {secondCount} second","minuteAndSeconds":"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds","minuteAndSecond":"{hourCount} hours, {minuteCount} minute, and {secondCount} second","andSeconds":"{hourCount} hours and {secondCount} seconds","andSecond":"{hourCount} hours and {secondCount} second"},"one":{"only":"{hourCount} hour","andMinutes":"{hourCount} hour and {minuteCount} minutes","andMinute":"{hourCount} hour and {minuteCount} minute","minutesAndSeconds":"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds","minutesAndSecond":"{hourCount} hour, {minuteCount} minutes, and {secondCount} second","minuteAndSeconds":"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds","minuteAndSecond":"{hourCount} hour, {minuteCount} minute, and {secondCount} second","andSeconds":"{hourCount} hour and {secondCount} seconds","andSecond":"{hourCount} hour and {secondCount} second"}},"minutes":{"other":{"only":"{minuteCount} minutes","andSeconds":"{minuteCount} minutes and {secondCount} seconds","andSecond":"{minuteCount} minutes and {secondCount} second"},"one":{"only":"{minuteCount} minute","andSeconds":"{minuteCount} minute and {secondCount} seconds","andSecond":"{minuteCount} minute and {secondCount} second"}},"seconds":{"other":"{secondCount} seconds","one":"{secondCount} second"}}}}}',
  ),
  rn = { Polaris: en },
  tn = "https://cdn.shopify.com/shopifycloud/app-bridge.js",
  nn = gt.forwardRef((e, c) => _.jsx(Je, { ...e, to: e.url ?? e.to, ref: c }));
function sn(e) {
  const {
    children: c,
    apiKey: s,
    i18n: t,
    isEmbeddedApp: i = !0,
    __APP_BRIDGE_URL: d = tn,
    ...a
  } = e;
  return _.jsxs(_.Fragment, {
    children: [
      i && _.jsx("script", { src: d, "data-api-key": s }),
      _.jsx(Tt, { ...a, linkComponent: nn, i18n: t || rn, children: c }),
    ],
  });
}
vt.createContext(null);
const on = "ui-nav-menu",
  fn = () => [{ rel: "stylesheet", href: yt }];
function hn() {
  const { apiKey: e } = At();
  return _.jsxs(sn, {
    isEmbeddedApp: !0,
    apiKey: e,
    children: [
      _.jsxs(on, {
        children: [
          _.jsx(Je, { to: "/app", rel: "home", children: "Home" }),
          _.jsx(Je, { to: "/app/additional", children: "Additional page" }),
        ],
      }),
      _.jsx(It, {}),
    ],
  });
}
function dn() {
  return wt.error(Lt());
}
export { dn as ErrorBoundary, hn as default, fn as links };
