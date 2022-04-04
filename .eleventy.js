const PWAPlugin = require("@piraces/eleventy-plugin-pwa");
const navPlugin = require("@11ty/eleventy-navigation");
const linkPlugin = require("@aloskutov/eleventy-plugin-external-links");
const path = require("path");
const htmlmin = require("html-minifier");
const postcss = require("postcss");
const browserify = require("browserify");
const tsify = require("tsify");
const uglifyify = require("uglifyify");
const streamToString = require("stream-to-string");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(PWAPlugin);
  eleventyConfig.addPlugin(navPlugin);
  eleventyConfig.addPlugin(linkPlugin, {
    rel: ["noopener", "external"]
  });
  //reenable this if needed later on
  //eleventyConfig.setLibrary("md", require("markdown-it")({"html": true}).use(require("markdown-it-attrs")));
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy({"src/misc": "/"});
  eleventyConfig.addFilter('toISODate', date => {
    return date.toISOString().split('T')[0]
  })

  //HTML optimization
  if (process.env.NODE_ENV === "prod") {
    eleventyConfig.addTransform("htmlmin", function (content) {
      if (this.outputPath && this.outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
      }
      return content;
    });
  }

  //SCSS -> CSS compilation, prefixing, and optimization
  const postcssConfig = {
    plugins: [
      require("@csstools/postcss-sass"),
      require("autoprefixer"),
      ...process.env.NODE_ENV === "prod" ? [require("cssnano")({preset: "default"})] : []
    ],
    options: {
      syntax: require("postcss-scss"),
      map: process.env.NODE_ENV !== "dev",
    }
  }
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      if (path.parse(inputPath).name.startsWith("_")) return; //TODO: make it so I can put SCSS partials in _includes
      return async ({page}) => {
        return postcss(postcssConfig.plugins)
          .process(inputContent, {...postcssConfig.options, from: inputPath, to: page.outputPath})
          .then(result => result.css);
      };
    }
  });

  //TS -> JS compilation, bundling, and optimization
  eleventyConfig.addExtension("ts", {
    outputFileExtension: "js",
    compile: async function (inputContent, inputPath) {
      return async () => {
        return streamToString(
          browserify(inputPath, {debug: process.env.NODE_ENV === "dev"})
            .plugin(tsify, {extends: "@tsconfig/recommended/tsconfig.json"})
            .transform(uglifyify, {global: true})
            .bundle()
            .on("error", error => console.error(error.toString()))
        ).then(result => result);
      }
    }
  });

  return {
    dir: {input: "src", output: "dist", data: "_data"},
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html", "scss", "ts"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
