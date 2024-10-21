import markdownIt from "markdown-it";
import mdItAnchor from "markdown-it-anchor";
import mdItAttrs from "markdown-it-attrs";
import mdItImageFigures from "markdown-it-image-figures";
import mdItTableOfContents from "markdown-it-table-of-contents";
import slugify from "@sindresorhus/slugify";

export default async function (eleventyConfig) {
	eleventyConfig.setLibrary("md", markdownIt({html: true})
		.use(mdItAnchor, {
			slugify: slugify,
		})
		.use(mdItAttrs)
		.use(mdItImageFigures, {
			figcaption: "title",
			link: true
		})
		.use(mdItTableOfContents, {
			includeLevel: [2,3],
			slugify: slugify
		})
	);
}
