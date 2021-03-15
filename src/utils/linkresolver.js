const linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === "blog-post") {
    return `/post/${doc.uid}`;
  }

  // Backup for all other types
  return "/";
};

module.exports = linkResolver;
