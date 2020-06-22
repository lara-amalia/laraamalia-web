const markdownIt = require("markdown-it");
const pluginRss = require('@11ty/eleventy-plugin-rss')

const addLeadingZero = (number) => {
  return `0${number}`.slice(-2);
};

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss)

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

  // Add layout alias for blog post layout
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // Add filters
  eleventyConfig.addFilter("displayDate", (dateString) => {
    const date = new Date(dateString);
    return `${addLeadingZero(date.getDate())}.${addLeadingZero(
      date.getMonth() + 1
    )}.${date.getFullYear()}`;
  });

  eleventyConfig.addFilter("dateTimeDate", (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${addLeadingZero(
      date.getMonth() + 1
    )}-${addLeadingZero(date.getDate())}`;
  });

  const markdownLibrary = markdownIt({
    html: true,
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
