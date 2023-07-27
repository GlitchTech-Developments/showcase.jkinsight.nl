import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

import preload from "astro-preload";
import compress from "astro-compress";

import tailwind from "@astrojs/tailwind";

import codeblocks from "@thewebforge/astro-code-blocks";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
	build: {
		inlineStylesheets: "auto",
	},
	integrations: [
		preload(),
		compress(),
		tailwind(),
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			bridge: true,
			apiOptions: {}, // storyblok-js-client options
			components: {},
			componentsDir: "src/",
			enableFallbackComponent: false,
		}),
		codeblocks({
			copyButtonTitle: "Copy",
			copyButtonTooltip: "Copied to clipboard",
		}),
	],
});
