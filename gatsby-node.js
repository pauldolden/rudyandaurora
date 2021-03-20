const path = require("path");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const posts = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);
  const postTemplate = path.resolve("src/templates/post.tsx");

  posts.data.allPrismicPost.edges.forEach((edge) => {
    createPage({
      path: `/post/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });

  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `);
  const pageTemplate = path.resolve("src/templates/page.tsx");

  pages.data.allPrismicPage.edges.forEach((edge) => {
    createPage({
      path: `/${edge.node.uid}`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
