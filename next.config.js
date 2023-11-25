/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [{ hostname: "bcqktnkcibojybehmybh.supabase.co" }],
  },
};

module.exports = nextConfig;
