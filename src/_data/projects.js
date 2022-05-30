const eleventyFetch = require("@11ty/eleventy-fetch");

const textOptions = {
  duration: "1d",
  type: "text"
}

module.exports = async () => [
  {
    name: "eleventy-img-helper",
    blurb: "An Eleventy plugin I created to convert image tags in generated HTML to responsive image markup based on " +
      "CSS selectors, using the eleventy-img utility. It's used on this very website!",
    readme: await eleventyFetch("https://github.com/adueppen/eleventy-img-helper/raw/main/README.md", textOptions),
    links: {
      "GitHub": "https://github.com/adueppen/eleventy-img-helper",
      "NPM": "https://npmjs.com/package/eleventy-img-helper"
    }
  }
];
