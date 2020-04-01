import React from 'react';
import slugify from '@alexcarpenter/slugify';
import styled from 'styled-components';
import { ColorString } from '../utilities';

const StyledDot = styled.span`
	background: ${(props) => props.color};
	width: var(--size-12);
	height: var(--size-12);
	border-radius: 50%;
	margin-right: var(--size-12);
`;

function Dot({ tag }) {
	const tagName = slugify(tag);
	const tagColor = ColorString(tagName);

	return <StyledDot color={tagColor} />;
}

export default Dot;
