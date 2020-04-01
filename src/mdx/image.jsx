import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
	margin-top: var(--size-24);
	margin-bottom: var(--size-24);
	padding: var(--size-16);
	border: 1px solid var(--gray-200);
	border-radius: var(--size-6);
`;

export default function Image(props) {
	return <StyledImage {...props} />;
}
