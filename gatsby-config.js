const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: "Rudy & Aurora",
    description: "Rudy & Aurora Dot Com",
    siteUrl: "https://rudyandaurora.com",
  },
  plugins: [
    "gatsby-plugin-image",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `${process.env.GATSBY_PRISMIC_REPO}`,
        accessToken: `${process.env.GATSBY_PRISMIC_TOKEN}`,
        linkResolver:
          ({ node, key, value }) =>
          (page) =>
            `/${page.uid}`,
        schemas: {
          post: require("./src/schemas/post.json"),
          page: require("./src/schemas/page.json"),
          home_page_content: require("./src/schemas/home_page_content.json"),
          contact_page_content: require("./src/schemas/contact_page_content.json"),
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
        setup(ref) {
          const metaInfo = ref.query.site.siteMetadata;

          metaInfo.generator = "GatsbyJS RSS";
          return metaInfo;
        },
        query: `
        {
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
        feeds: [
          {
            serialize(value) {
              const rssMetadata = value.query.site.siteMetadata;
              return value.query.allPrismicPost.edges.map((edge) => ({
                title: edge.node.data.title.text,
                description: edge.node.data.short_content.text,
                date: edge.node.first_publication_date,
                url: rssMetadata.siteUrl + "/post/" + edge.node.uid,
                guid: rssMetadata.siteUrl + "/post/" + edge.node.uid,
                content: edge.node.data.content.html,
              }));
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
                    first_publication_date
                  }
                }
              }
            }
            
          `,
            output: "/feed.xml",
            title: "Rudy and Aurora RSS Feed",
          },
        ],
      },
    },
  ],
};
