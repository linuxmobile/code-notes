import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-size: var(--size-36);
	margin-top: var(--size-48);
	margin-bottom: var(--size-16);
`;

const StyledH2 = styled.h2`
	font-size: var(--size-32);
	margin-top: var(--size-48);
	margin-bottom: var(--size-16);
`;

const StyledH3 = styled.h3`
	font-size: var(--size-28);
	margin-top: var(--size-48);
	margin-bottom: var(--size-4);
`;

const StyledH4 = styled.h4`
	font-size: var(--size-24);
	margin-top: var(--size-48);
	margin-bottom: var(--size-4);
`;

const StyledH5 = styled.h5`
	font-size: var(--size-20);
	margin-top: var(--size-48);
	margin-bottom: var(--size-4);
`;

const StyledH6 = styled.h6`
	font-size: var(--size-16);
	margin-top: var(--size-48);
	margin-bottom: var(--size-4);
`;

export function H1(props) {
	return <StyledH1 {...props} />;
}

export function H2(props) {
	return <StyledH2 {...props} />;
}

export function H3(props) {
	return <StyledH3 {...props} />;
}

export function H4(props) {
	return <StyledH4 {...props} />;
}

export function H5(props) {
	return <StyledH5 {...props} />;
}

export function H6(props) {
	return <StyledH6 {...props} />;
}
