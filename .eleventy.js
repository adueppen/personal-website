const PWAPlugin = require("@piraces/eleventy-plugin-pwa");
const navPlugin = require("@11ty/eleventy-navigation");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(PWAPlugin);
  eleventyConfig.addPlugin(navPlugin);
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({"src/misc": "/"});
  if (process.env.NODE_ENV === "prod") {
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      if (outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
      }
      return content;
    });
  }
  return {
    dir: {input: "src", output: "dist", data: "_data"},
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
