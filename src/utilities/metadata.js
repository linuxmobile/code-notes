import { graphql, useStaticQuery } from 'gatsby';

export const Metadata = () => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					title
					gitRepoContentPath
					basePath
				}
			}
		}
	`);

	return data.site.siteMetadata;
};

export default Metadata;
