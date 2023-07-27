module.exports = {
	trailingComma: "es5",
	semi: true,
	singleQuote: false,
	useTabs: true,
	tabWidth: 2,
	jsxSingleQuote: false,
	bracketSpacing: true,
	arrowParens: "always",
	endOfLine: "lf",
	proseWrap: "preserve",
	printWidth: 100,
	plugins: [
		require.resolve("prettier-plugin-astro"),
		require.resolve("prettier-plugin-tailwindcss"),
	],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
