import miscConfig from "./src/_config/misc.config.js";
import pwaConfig from "./src/_config/pwa.config.js";
import mdConfig from "./src/_config/md.config.js";
import htmlConfig from "./src/_config/html.config.js";
import cssConfig from "./src/_config/css.config.js";
import jsConfig from "./src/_config/js.config.js";

export default async function (eleventyConfig) {
	// includes other misc 11ty plugins
	eleventyConfig.addPlugin(miscConfig);

	// workbox setup
	eleventyConfig.addPlugin(pwaConfig);

	// markdown-it config and plugins
	eleventyConfig.addPlugin(mdConfig);

	// HTML minification, image optimization
	eleventyConfig.addPlugin(htmlConfig);

	// SCSS -> CSS compilation, prefixing, and optimization
	eleventyConfig.addPlugin(cssConfig);

	// TS -> JS compilation, bundling, and optimization
	eleventyConfig.addPlugin(jsConfig);
};

export const config = {
	dir: {
		input: "src",
		output: process.env.NODE_ENV === "prod" ? "dist" : "dist_dev",
	},
	htmlTemplateEngine: "njk",
	markdownTemplateEngine: "njk"
};
