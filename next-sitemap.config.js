const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-0.xml`,
    ]
  }
}