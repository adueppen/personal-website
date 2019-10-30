const pluginPWA = require("eleventy-plugin-pwa");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({"src/misc": "/"});
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  }); //TODO: make this transform only activate in the production build
  return {
    dir: {input: "src", output: "dist", data: "_data"},
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  }
};
