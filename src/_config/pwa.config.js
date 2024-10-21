import pwaPlugin from "@pkvach/eleventy-plugin-pwa";

export default async function (eleventyConfig) {
	if (process.env.NODE_ENV === "prod") {
		const netFirst = ["html", "css", "js", "json"];
		const staleWhileRe = ["ttf", "woff", "woff2"];
		const allExtensions = netFirst.concat(staleWhileRe);
		eleventyConfig.addPlugin(pwaPlugin, {
			sourcemap: false,
			globPatterns: [`*.{${allExtensions}}`, `**/*.{${allExtensions}}`],
			runtimeCaching: [
				{
					handler: "NetworkFirst",
					urlPattern: new RegExp(`^.*\\.(${netFirst.join("|")})$`)
				},
				{
					handler: "CacheFirst",
					urlPattern: new RegExp(`^.*\\.(${staleWhileRe.join("|")})$`)
				}
			]
		});
	}
}
