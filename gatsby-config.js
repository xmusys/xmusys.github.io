/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ERAS Research Group`,
    siteUrl: `https://xmusys.github.io/`,
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