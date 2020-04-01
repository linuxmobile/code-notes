import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Metadata } from '../utilities';
import Layout from '../components/layout';
import { Code, Paragraph, H1, H2, H3, H4, H5, H6, Blockquote, Image, Table } from '../mdx';
import { TagList, Wrapper } from '../components';

const StyledHeader = styled.header`
	border-bottom: 1px solid var(--gray-200);
	margin-bottom: var(--size-24);
	padding-bottom: var(--size-24);

	h1 {
		display: flex;
		align-items: center;

		span {
			font-size: var(--size-32);
			margin-right: var(--size-16);
		}
	}
`;

const StyledEdit = styled.div`
	font-size: var(--size-14);
	font-weight: 700;
	text-decoration: underline;
	border-top: 1px solid var(--gray-200);
	margin-top: var(--size-48);
	padding-top: var(--size-16);
`;

function Note({ data, pageContext, location }) {
	if (!data) {
		return null;
	}

	const {
		frontmatter: { title, tags, emoji },
		body,
		parent: { relativePath },
	} = data.mdx;

	const { gitRepoContentPath } = Metadata();

	const components = {
		pre: Code,
		h1: H1,
		h2: H2,
		h3: H3,
		h4: H4,
		h5: H5,
		h6: H6,
		p: Paragraph,
		blockquote: Blockquote,
		img: Image,
		table: Table,
	};

	return (
		<Layout
			basePath={pageContext.basePath}
			tags={pageContext.tags}
			path={location.pathname}
			title={title}
		>
			<Wrapper>
				<StyledHeader>
					<h1>
						{emoji && <span>{emoji}</span>}
						{title}
					</h1>

					{tags && <TagList tags={tags} />}
				</StyledHeader>

				<MDXProvider components={components}>
					<MDXRenderer>{body}</MDXRenderer>
				</MDXProvider>

				<StyledEdit>
					{gitRepoContentPath && (
						<Link href={`${gitRepoContentPath}${relativePath}`}>Edit this page</Link>
					)}
				</StyledEdit>
			</Wrapper>
		</Layout>
	);
}

export default Note;
