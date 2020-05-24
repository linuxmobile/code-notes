const remarkSlug = require('remark-slug');
const remarkEmoji = require('remark-emoji');
const squeezeParagraphs = require('remark-squeeze-paragraphs');
const { remarkTruncateLinks } = require('remark-truncate-links');
const unwrapImages = require('remark-unwrap-images');

module.exports = {
	siteMetadata: {
		title: 'code-notes',
		contentPath: 'notes',
		gitRepoContentPath: 'https://github.com/railek/code-notes/tree/master/notes/',
		basePath: '/',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-no-sourcemaps',
		'gatsby-plugin-eslint',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: 'notes',
				name: 'notes',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-markdown-references',
			options: {
				types: ['Mdx'],
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: ['.md', '.mdx'],
				gatsbyRemarkPlugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							backgroundColor: 'none',
							maxWidth: 900,
							linkImagesToOriginal: false,
							disableBgImage: true,
							wrapperStyle: 'margin: 1.5rem 0;',
						},
					},
				],
				remarkPlugins: [
					remarkSlug,
					remarkEmoji,
					squeezeParagraphs,
					[remarkTruncateLinks, { style: 'smart' }],
					unwrapImages,
				],
			},
		},
	],
};
