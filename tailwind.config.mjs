/** @type {import('tailwindcss').Config} */
import twColors from "./src/shared/tw-colors.json";
import twColorsPalette from "./src/shared/tw-colors-palette.json";

const badgePlugin = require("@kembec/tailwindcss-badge-plugin");

const safelist = twColors
	.map((color) => {
		return twColorsPalette.map((shade) => {
			return `badge-${color.toLowerCase()}-${shade}`;
		});
	})
	.flat();

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [badgePlugin],
	safelist,
};
