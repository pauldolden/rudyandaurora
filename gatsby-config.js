const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: "Rudy & Aurora",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
        schemas: {
          post: require("./src/schemas/post.json"),
        },
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `29426607772`,
    //   },
    // },
  ],
};
