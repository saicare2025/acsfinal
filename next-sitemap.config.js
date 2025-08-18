module.exports = {
  siteUrl: "https://australian-credit-solution.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  additionalPaths: async (config) => [
    { loc: "/credit-repair-adelaide", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit-repair-brisbane", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit-repair-canberra", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit-repair-darwin", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit-repair-hobart", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit-repair-melbourne", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit-repair-perth", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit_repair_sydney", changefreq: "monthly", priority: 0.8 },
    { loc: "/credit-score", changefreq: "monthly", priority: 0.8 },


    { loc: "/meeting-schedule", changefreq: "monthly", priority: 0.7 },
    { loc: "/privacy-policy", changefreq: "yearly", priority: 0.5 },
    { loc: "/terms-conditions", changefreq: "yearly", priority: 0.5 },
    { loc: "/complaints-handling-policy", changefreq: "yearly", priority: 0.5 },
    { loc: "/testimonial", changefreq: "monthly", priority: 0.6 },
    { loc: "/blogs", changefreq: "weekly", priority: 0.6 },
    { loc: "/quiz", changefreq: "monthly", priority: 0.6 },

  
  ],
};
