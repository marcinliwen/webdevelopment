module.exports = {
  siteMetadata: {
    title: `Strony Internetowe`,
    title2: 'Stary Wieloryb',
    subtitle:
      "Zamów stronę internetową, zdobądź nowych klientów i bądź na bierząco ze stałymi klientami, w przystępnej cenie.",
    description: `Projektowanie i kodowanie stron internetowych dla firm, osobistych, wizytówek, portfolio.`,
    author: `Marcin Liweń`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/oldwhale-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: "Work Sans",
              axes: "wght@100..300;700..900", // multiple ranges are supported, ex: "wght@300..500;700..900"
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
