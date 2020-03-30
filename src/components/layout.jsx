import React from 'react';
import { Helmet } from 'react-helmet';

function Layout({ title, children }) {
	return (
		<>
			<Helmet key="app-metadata" defaultTitle={title}>
				<html lang="en" />
				<meta charSet="utf-8" />
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Helmet>

			<main>{children}</main>
		</>
	);
}
export default Layout;
