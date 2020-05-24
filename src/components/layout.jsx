import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { IoLogoGithub } from 'react-icons/io';
import { Sidebar, Burger } from '.';

const StyledMain = styled.main`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	background: var(--white);
	transform: ${(props) => (props.navOpen ? `translateX(${'320px'})` : `translateX(${'0px'})`)};
	transition: all 0.2s ease-in-out;
	min-height: 100vh;
	border-left: 1px solid var(--gray-200);

	@media (min-width: 768px) {
		right: var(--sidebar);
	}
`;

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: var(--size-64);
	border-bottom: 1px solid var(--gray-200);
	padding: var(--size-16);

	@media (min-width: 768px) {
		padding: var(--size-24);
	}

	svg {
		font-size: var(--size-32);
		color: var(--gray-500);
	}
`;

function Layout({ basePath, title, tags, children }) {
	const [open, setOpen] = useState(true);

	return (
		<>
			<Helmet key="app-metadata" defaultTitle={title}>
				<html lang="en" />
				<meta charSet="utf-8" />
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Helmet>

			<StyledMain navOpen={open}>
				<StyledHeader>
					<Burger open={open} setOpen={setOpen} />
					<a
						href="https://github.com/railek/code-notes"
						target="_blank"
						rel="noopener noreferrer"
					>
						<IoLogoGithub />
					</a>
				</StyledHeader>

				{children}
			</StyledMain>

			<Sidebar tags={tags} basePath={basePath} />
		</>
	);
}
export default Layout;
