import linkPlugin from "@aloskutov/eleventy-plugin-external-links";
import imgOptPlugin from "eleventy-img-helper";
import path from "path";
import htmlmin from "html-minifier";

export default async function(eleventyConfig) {
	eleventyConfig.addPlugin(linkPlugin, {
		rel: ["noopener", "external"]
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
}
