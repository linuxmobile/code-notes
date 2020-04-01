const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const slugify = require('@alexcarpenter/slugify');

const { createFilePath } = require(`gatsby-source-filesystem`);
const DEFAULT_BASE_PATH = '/';

const getBasePath = (bp = DEFAULT_BASE_PATH) => {
	if (bp === '' || bp === '.' || bp === './') {
		return DEFAULT_BASE_PATH;
	}
	return bp;
};

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
	const { program } = store.getState();
	const contentPath = themeOptions.contentPath || `notes`;
	const dirs = [path.join(program.directory, contentPath)];

	dirs.forEach((dir) => {
		if (!fs.existsSync(dir)) {
			reporter.log(`Initializing ${dir} directory`);
			mkdirp.sync(dir);
		}
	});
};

exports.createPages = async ({ graphql, actions }, options) => {
	const { createPage } = actions;
	const basePath = getBasePath(options.basePath);

	const mdxDocs = await graphql(
		`
			{
				allNotes: allMdx {
					edges {
						node {
							id
							frontmatter {
								title
								tags
							}
							fields {
								slug
							}
						}
					}

					tags: group(field: frontmatter___tags) {
						tag: fieldValue
						totalCount
					}
				}
			}
		`,
	);

	if (mdxDocs.errors) {
		throw mdxDocs.errors;
	}

	const { allNotes } = mdxDocs.data;
	const globalTagsList = allNotes.tags;
	const notesData = allNotes.edges;

	const slugifiedTags = globalTagsList.map((item) => {
		return {
			...item,
			slug: `/${slugify(item.tag)}`,
			path: path.join(basePath, 'tag', slugify(item.tag)),
		};
	});

	notesData.forEach((note, index) => {
		const previous = index === notesData.length - 1 ? null : notesData[index + 1].node;
		const next = index === 0 ? null : notesData[index - 1].node;
		const slug = slugify(note.node.fields.slug);
		createPage({
			path: slug,
			component: path.join(__dirname, './src/templates', 'note.js'),
			context: {
				id: note.node.id,
				previous,
				next,
				basePath,
				tags: slugifiedTags,
			},
		});
	});

	createPage({
		path: basePath,
		component: path.join(__dirname, './src/templates', 'notes.js'),
		context: {
			tags: slugifiedTags,
			basePath,
		},
	});

	slugifiedTags.forEach((item) => {
		createPage({
			path: item.path,
			component: path.join(__dirname, './src/templates', 'tags.js'),
			context: {
				tag: item.tag,
				tags: slugifiedTags,
				basePath,
			},
		});
	});
};

exports.onCreateNode = async ({ node, actions, getNode }, options) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const slug = createFilePath({
			node,
			getNode,
			trailingSlash: false,
		});
		const pathSlug = path.join(getBasePath(options.basePath), slug);
		createNodeField({
			name: `slug`,
			node,
			value: pathSlug,
		});
	}
};

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions;
	const typeDefs = `
    type SiteSiteMetadata {
      title: String!
      description: String!
      gitRepoContentPath: String
    }
  `;
	createTypes(typeDefs);
};
