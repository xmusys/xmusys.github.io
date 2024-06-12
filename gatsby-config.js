/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ERAS Research Group`,
    siteUrl: `https://xmusys.github.io`,
    description: `Efficient, Reliable, and Advanced System Research Group`,
    keywords: `System Research`,
  },
  plugins: [
    "gatsby-plugin-postcss",

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,

    `gatsby-transformer-json`,

    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "GT-MQB8GWBJ",
          "G-P3NJV05E9B"
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          origin: "https://xmusys.github.io",
          delayOnRouteUpdate: 0,
        },
      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://xmusys.github.io/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `home-images`,
        path: `${__dirname}/src/assets/images/home`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `team-images`,
        path: `${__dirname}/src/assets/images/team`,
      },
    },
  ]
};