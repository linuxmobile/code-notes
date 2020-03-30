module.exports = {
	plugins: [
		{
			resolve: 'gatsby-plugin-typography',
			options: {
				pathToConfigModule: 'src/utilities/typography',
			},
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-no-sourcemaps',
		'gatsby-plugin-eslint',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
	],
};
