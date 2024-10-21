import navPlugin from "@11ty/eleventy-navigation";
import syntaxPlugin from "@11ty/eleventy-plugin-syntaxhighlight";
import metaPlugin from "eleventy-plugin-metagen";

export default async function (eleventyConfig) {
	eleventyConfig.addPlugin(navPlugin);
	eleventyConfig.addPlugin(syntaxPlugin);
	// TODO: this plugin lacks the option but consider adding a class to all external links with a symbol and possibly
	//  color to indicate that they're external (something like what wikipedia has)
	eleventyConfig.addPlugin(metaPlugin);

	// TODO: consider fetching https://tilde.zone/.well-known/webfinger?resource=acct:adueppen@tilde.zone and putting it
	//  at the same path on my own site so I can use *@ajd.sh as a Mastodon alias
	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy({"src/misc": "/"});
	eleventyConfig.addPassthroughCopy("src/styles/fonts");
	eleventyConfig.addPassthroughCopy("src/{posts,unlinked}/*/*.{jpg,png,pdf}");
	eleventyConfig.setServerOptions({
		port: 4000,
		showAllHosts: true
	});
	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	eleventyConfig.addFilter("toISODate", date => {
		return date.toISOString().split("T")[0]
	});
}
