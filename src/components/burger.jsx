import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
	padding: var(--size-4);
	display: flex;
	justify-content: center;
	flex-direction: column;

	@media (min-width: 768px) {
		display: none;
	}

	span {
		display: block;
		width: var(--size-24);
		height: var(--size-2);
		background: var(--gray-700);
		transition: width 0.4s ease-in-out;

		:nth-child(2) {
			margin: var(--size-6) var(--size-0);
		}
	}
`;

export default function Burger({ open, setOpen }) {
	const isExpanded = !!open;

	return (
		<StyledBurger
			aria-label="Toggle menu"
			aria-expanded={isExpanded}
			open={open}
			onClick={() => setOpen(!open)}
		>
			<span />
			<span />
			<span />
		</StyledBurger>
	);
}
