const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginPWA);
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({"src/misc" : "/"});
  return {
    dir: {input: "src", output: "dist", data: "_data"},
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "html", "yml"],
    htmlTemplateEngine: "njk"
  }
};
