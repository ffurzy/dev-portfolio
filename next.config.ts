import type { NextConfig } from "next";

// Baseline hardening for a static site: no sniffing, no framing, tight referrer and
// no device APIs. HSTS is belt and braces — .dev is HTTPS-only by preload anyway.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

// The default *.vercel.app alias serves the same pages; send search engines and
// visitors to the one domain so nothing gets indexed as a duplicate.
const VERCEL_ALIAS = "dev-portfolio-inky-iota.vercel.app";

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: VERCEL_ALIAS }],
        destination: "https://dmitriimusikhin.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
