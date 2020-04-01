import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	max-width: var(--wrapper);
	margin: 0 auto;
	padding: var(--size-24) var(--size-16);

	@media (min-width: 768px) {
		padding: var(--size-48) var(--size-24);
	}
`;

const Wrapper = ({ children }) => {
	return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
