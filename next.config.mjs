/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  siteUrl: process.env.SITE_URL || 'https://privacypolicy.ludgi.ai',
  generateRobotsTxt: true, // (optional)
}

export default nextConfig
