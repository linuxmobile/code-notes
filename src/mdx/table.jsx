import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	table-layout: fixed;
	margin: var(--size-32) var(--size-0);
	text-align: left;

	th {
		border-bottom: 1px solid var(--gray-200);
		padding: var(--size-8);
		font-weight: 700;
		font-size: var(--size-20);
	}

	td {
		border-bottom: 1px solid var(--gray-200);
		padding: var(--size-8);
	}
`;

export default function Table(props) {
	return <StyledTable {...props} />;
}
