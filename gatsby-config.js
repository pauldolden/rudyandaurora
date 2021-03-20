const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: "Rudy & Aurora",
    description: "Rudy & Aurora Dot Com",
    siteUrl: "https://rudyandaurora.com",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_TOKEN}`,
        linkResolver: ({ node, key, value }) => (page) => `/${page.uid}`,
        schemas: {
          post: require("./src/schemas/post.json"),
          page: require("./src/schemas/page.json"),
        },
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `{
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
      },
      feeds: [
        {
          serialize: ({ query: { site, allPrismicPost } }) => {
            return allPrismicPost.edges.map((edge) => {
              return Object.assign({}, edge.node.data, {
                description: edge.node.data.short_content,
                date: edge.node.first_publication_date,
                url: site.siteMetadata.siteUrl + edge.node.uid,
                guid: site.siteMetadata.siteUrl + edge.node.uid,
              });
            });
          },
          query: `
          {
            allPrismicPost {
              edges {
                node {
                  id
                  uid
                  data {
                    short_content {
                      text
                    }
                    content {
                      html
                    }
                    title {
                      text
                    }
                  }
                  first_publication_date(fromNow: true)
                }
              }
            }
          }
          
          `,
          output: "/feed.xml",
          title: "RSS feed",
        },
      ],
    },
  ],
};
