import esbuild from "esbuild";

export default async function (eleventyConfig) {
	eleventyConfig.addTemplateFormats("ts");

	eleventyConfig.addExtension("ts", {
		outputFileExtension: "js",
		compile: async function (inputContent, inputPath) {
			return async () => {
				return esbuild.build({
					entryPoints: [inputPath],
					bundle: true,
					minify: process.env.NODE_ENV !== "dev",
					write: false
				}).then(result => result.outputFiles[0].text);
			};
		}
	});
}
