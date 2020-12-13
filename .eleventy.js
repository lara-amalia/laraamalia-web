module.exports = function (eleventyConfig) {
  // Template formats
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  // Copy static files to output directory
  eleventyConfig.addPassthroughCopy("content/assets");
  eleventyConfig.addPassthroughCopy("content/favicon.png");
  eleventyConfig.addPassthroughCopy("content/_redirects");

  // TODO: make it typescript
  eleventyConfig.addPassthroughCopy({
    "src/scripts/main.js": "scripts/main.js",
  });

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
