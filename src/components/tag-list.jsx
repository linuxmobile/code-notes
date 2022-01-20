import React from 'react';
import { Link } from 'gatsby';
import slugify from '@alexcarpenter/slugify';
import styled from 'styled-components';
import { ColorString, Metadata } from '../utilities';

const StyledTag = styled.div`
	display: flex;
	align-items: center;
	background: ${(props) => props.color};
	border-radius: var(--size-4);
	padding: var(--size-2) var(--size-12);
	margin-right: var(--size-4);

	:last-of-type {
		margin-right: var(--size-0);
	}

	a {
		color: -eee;
		font-weight: 600;
		font-size: var(--size-14);
	}
`;

function TagList({ tags }) {
	const { basePath } = Metadata();

	if (!tags) {
		return null;
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexShrink: 0,
			}}
		>
			{tags.map((item, index) => {
				const tagName = slugify(item);
				const tagColor = ColorString(tagName);
				const tagLink = basePath === '/' ? `/tag/${tagName}` : `${basePath}/tag/${tagName}`;

				return (
					<StyledTag color={tagColor} key={index}>
						<Link to={tagLink}>{item}</Link>
					</StyledTag>
				);
			})}
		</div>
	);
}

export default TagList;
