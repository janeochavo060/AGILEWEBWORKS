const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
module.exports = {
  changefreq: "daily",
  sitemapSize: 5000,
  generateRobotsTxt: true,
  siteUrl,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/preview"],
      },
    ],
  },
  exclude: ["/preview"],
};
