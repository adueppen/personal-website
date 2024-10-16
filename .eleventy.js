const pwaPlugin = require("@pkvach/eleventy-plugin-pwa");
const navPlugin = require("@11ty/eleventy-navigation");
const syntaxPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
const linkPlugin = require("@aloskutov/eleventy-plugin-external-links");
const metaPlugin = require("eleventy-plugin-metagen");
const imgOptPlugin = require("eleventy-img-helper");

const path = require("path");
const htmlmin = require("html-minifier");
const postcss = require("postcss");
const esbuild = require("esbuild");

module.exports = function (eleventyConfig) {
	//main 11ty config
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
	eleventyConfig.addPlugin(navPlugin);
	eleventyConfig.addPlugin(syntaxPlugin);
	//TODO: this plugin lacks the option but consider adding a class to all external links with a symbol and possibly
	// color to indicate that they're external (something like what wikipedia has)
	eleventyConfig.addPlugin(linkPlugin, {
		rel: ["noopener", "external"]
	});
	eleventyConfig.addPlugin(metaPlugin);
	eleventyConfig.setLibrary("md", require("markdown-it")({html: true})
			.use(require("markdown-it-anchor"))
			.use(require("markdown-it-attrs"))
			.use(require("markdown-it-image-figures"), {
				figcaption: "title",
				link: true
			})
			.use(require("markdown-it-table-of-contents"), {
				includeLevel: [2,3]
			})
			//.use(require("markdown-it-linkify-images"), {target: "_blank"})
	);
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

	eleventyConfig.addFilter("toISODate", date => {
		return date.toISOString().split("T")[0]
	});

	eleventyConfig.addPlugin(imgOptPlugin, {
		formats: ["avif", "webp", "jpeg"],
		hashLength: 4,
		filenameFormat: (id, src, width, format) => {
			let filename = path.basename(src, path.extname(src)).split("-")[0];
			return `${filename}-${id}-${width}.${format}`
		},
		sharpAvifOptions: {
			quality: 75
		},
		selectors: {
			".headerImg": {
				widths: [720, 1440, 2160],
				sizes: "100vw",
				htmlFunction: (metadata, options, attributes) => {
					let newImgAttrs = {
						src: metadata.jpeg[0].url,
						decoding: "async"
					};
					return `<picture>
          ${Object.values(metadata).map(imageFormat => {
						return `<source
              type="${imageFormat[0].sourceType}"
              srcset="${imageFormat.map(entry => entry.srcset).join(", ")}"
              sizes="${options.sizes}">`;
					}).join("\n")}
            <img ${Object.entries({...attributes, ...newImgAttrs}).map(attr => `${attr[0]}="${attr[1]}"`).join(" ")}>
          </picture>`;
				}
			},
			"article img": {
				widths: [720, 1080],
				sizes: "(min-width: 744px) 720px, 100vw"
			},
			"img[data-png]": { // for screenshots that should stay lossless and are quick to process
				filenameFormat: (id, src, width, format) => {
					let filename = path.basename(src, path.extname(src));
					return `${filename}-${width}.${format}`
				},
				formats: ["png"],
				sharpPngOptions: {
					compressionLevel: 9,
					effort: 10
				}
			}
		},
		postFunction: (inputContent) => {
			if (process.env.NODE_ENV === "prod") {
				return htmlmin.minify(inputContent, {
					useShortDoctype: true,
					removeComments: true,
					collapseWhitespace: true
				})
			}
			return inputContent;
		}
	});

	//SCSS -> CSS compilation, prefixing, and optimization
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css",
		compile: async function (inputContent, inputPath) {
			let postcssConfig = {
				plugins: [
					require("@csstools/postcss-sass")({
						includePaths: [
							path.dirname(inputPath) || ".",
							`./${this.config.dir.input}/${this.config.dir.includes}`
						],
						silenceDeprecations: ['legacy-js-api']
					}),
					require("autoprefixer"),
					...process.env.NODE_ENV === "prod" ? [require("cssnano")({preset: "default"})] : []
				],
				options: {
					syntax: require("postcss-scss"),
					map: process.env.NODE_ENV !== "dev",
				}
			}
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
				return esbuild.build({
					entryPoints: [inputPath],
					bundle: true,
					minify: process.env.NODE_ENV !== "dev",
					write: false
				}).then(result => result.outputFiles[0].text);
			};
		}
	});

	return {
		dir: {input: "src", output: process.env.NODE_ENV === "prod" ? "dist" : "dist_dev", data: "_data"},
		passthroughFileCopy: true,
		templateFormats: ["njk", "md", "html", "scss", "ts"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk"
	};
};
