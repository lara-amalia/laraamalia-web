const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  // Copy static files to output directory
  eleventyConfig.addPassthroughCopy("content/assets");
  eleventyConfig.addPassthroughCopy("content/favicon.png");

  // TODO: make it typescript
  eleventyConfig.addPassthroughCopy({ "src/scripts/main.js": "scripts/main.js" });

  // Add layout alias for blog post layout
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  const markdownLibrary = markdownIt({
    html: true,
    quotes: '„“‚‘',
    linkify: true,
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../src/_includes",
      data: "../src/_data",
    },
    htmlTemplateEngine: "njk",
  };
};
