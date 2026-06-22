/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages the site is served from a subpath
// (https://<user>.github.io/<repo>/), so a basePath/assetPrefix is required
// for assets to resolve. The deploy workflow sets GITHUB_PAGES=true.
const repo = 'PortfolioWebsite';
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  ...(isGithubPages
    ? {
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
      }
    : {}),
};

export default nextConfig;
