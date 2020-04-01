import { graphql } from 'gatsby';
import NotePage from '../pages/note';

export default NotePage;

export const pageQuery = graphql`
	query NoteById($id: String!) {
		mdx(id: { eq: $id }) {
			body
			frontmatter {
				title
				tags
				emoji
			}
			references: inboundReferences {
				... on Mdx {
					frontmatter {
						title
					}
					slug
				}
			}
			fields {
				slug
			}
			parent {
				... on File {
					relativePath
				}
			}
		}
	}
`;
