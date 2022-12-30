module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ['prettier', 'import', '@typescript-eslint'],
	extends: ['next/core-web-vitals', 'prettier', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'@typescript-eslint/ban-ts-comment': 'off',
	},
}
