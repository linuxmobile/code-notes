import React from 'react';
import slugify from '@alexcarpenter/slugify';
import { Link } from 'gatsby';
import styled from 'styled-components';
import TagList from './tag-list';

const StyledList = styled.div`
	margin-bottom: var(--size-16);

	:last-of-type {
		margin-bottom: var(--size-0);
	}

	a {
		display: flex;
		justify-content: space-between;
	}

	h3 {
		display: flex;
		align-items: center;
		font-size: var(--size-20);
		font-weight: 700;
		color: #eee;

		div {
			width: var(--size-48);
		}
	}
`;

function NoteListItem({ slug, title, tags, emoji, onClick }) {
	return (
		<StyledList>
			<Link to={slug} onClick={onClick}>
				<h3>
					<div>{emoji || '📝'}</div>
					{title}
				</h3>

				{tags && <TagList tags={tags} />}
			</Link>
		</StyledList>
	);
}

function NoteList({ notes }) {
	return (
		<>
			{notes.map(({ node }) => {
				const { title, tags, emoji } = node.frontmatter;
				const slug = `/${slugify(node.fields.slug)}`;
				return (
					<NoteListItem title={title} emoji={emoji} tags={tags} slug={slug} key={slug} />
				);
			})}
		</>
	);
}

export default NoteList;
