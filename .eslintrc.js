module.exports = {
	extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier', 'prettier/react'],
	settings: {
		'import/core-modules': ['gatsby'],
	},
	globals: {
		graphql: true,
	},
	env: {
		browser: true,
		node: true,
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-underscore-dangle': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/no-array-index-key': 'off',
		'react/forbid-prop-types': 'off',
		'react/prop-types': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['to'],
				aspects: ['noHref', 'invalidHref', 'preferButton'],
			},
		],
	},
};
