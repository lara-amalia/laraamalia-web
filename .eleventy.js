module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  // Copy static files to output directory
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.png");

  // Add layout alias for blog post layout
  // eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
  };
};
