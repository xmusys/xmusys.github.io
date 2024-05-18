/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ERAS Research Group`,
    siteUrl: `https://github.io/xmusys/xmusys.github.io/`,
  },
  plugins: [
    "gatsby-plugin-postcss",

    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    `gatsby-plugin-mdx`,
    `gatsby-transformer-remark`,

    `gatsby-transformer-json`,

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
    }
  ]
};