import React from 'react';
import styled from 'styled-components';

const StyledBlockquote = styled.blockquote`
	border-left: 4px solid var(--gray-200);
	padding-left: var(--size-16);
	margin: var(--size-24) var(--size-0);
`;

const StyledParagraph = styled.p`
	margin-bottom: var(--size-20);

	a {
		text-decoration: underline;
		font-weight: 500;
	}
`;

export function Paragraph(props) {
	return <StyledParagraph {...props} />;
}

export function Blockquote(props) {
	return <StyledBlockquote {...props} />;
}
