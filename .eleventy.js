const pluginPWA = require("eleventy-plugin-pwa");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginPWA);
    eleventyConfig.addPassthroughCopy('src/images')
    /*todo: next release of 11ty will support copy passthrough globbing so I could put favicon.ico and manifest.json
       in a different folder and make things less weird*/
    return {
        dir: { input: 'src', output: 'dist', data: '_data' },
        passthroughFileCopy: true,
        templateFormats: ['njk', 'md', 'css', 'html', 'yml', 'ico'],
        htmlTemplateEngine: 'njk'
    }
};
