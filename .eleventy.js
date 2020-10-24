const markdownIt = require("markdown-it");
const pluginRss = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

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

  const markdownLibrary = markdownIt({
    html: true,
    linkify: false,
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
