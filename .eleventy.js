const pluginPWA = require("eleventy-plugin-pwa");
module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginPWA);

    return {
        dir: {
            input: "src",
            output: "dist",
        },
        templateFormats: [
            "md",
            "njk",
            "png",
            "json",
            "ico",
        ],
    }
};
