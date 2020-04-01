import React from 'react';
import Layout from '../components/layout';
import { Metadata } from '../utilities';
import { NoteList, Wrapper } from '../components';

function NotesPage({ data, pageContext, location }) {
	if (!data) {
		return null;
	}

	const notes = data.allMdx.edges;
	const { title } = Metadata();
	const siteTitle = title;

	return (
		<Layout
			path={location.pathname}
			basePath={pageContext.basePath}
			tags={pageContext.tags}
			title={pageContext.tag ? `Tag: ${pageContext.tag}` : siteTitle}
		>
			<Wrapper>
				<NoteList notes={notes} />
			</Wrapper>
		</Layout>
	);
}

export default NotesPage;
