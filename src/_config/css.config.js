import postcss from "postcss";
import postcssSass from "@csstools/postcss-sass";
import path from "path";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssScss from "postcss-scss";

export default async function (eleventyConfig) {
	eleventyConfig.addTemplateFormats("scss");

	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",
		compile: async function (inputContent, inputPath) {
			return async ({page}) => postcss([
				postcssSass({
					includePaths: [
						path.dirname(inputPath) || ".",
						`./${this.config.dir.input}/${this.config.dir.includes}`
					],
					silenceDeprecations: ['legacy-js-api'] // TODO: I shouldn't have to include this
				}),
				autoprefixer,
				...process.env.NODE_ENV === "prod" ? [cssnano({preset: "default"})] : []
			]).process(inputContent, {
				syntax: postcssScss,
				map: process.env.NODE_ENV !== "dev",
				from: inputPath,
				to: page.outputPath
			}).then(result => result.css);
		}
	});
}
