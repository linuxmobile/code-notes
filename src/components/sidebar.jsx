import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { IoIosFiling } from 'react-icons/io';
import Dot from './dot';

const StyledSidebar = styled.aside`
	width: var(--sidebar);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	overflow: auto;
	z-index: -10;
	min-height: 100vh;
	background: var(--gray-100);
	padding: var(--size-24);

	.title {
		display: flex;
		align-items: center;
		background: var(--gray-200);
		padding: var(--size-12);
		border-radius: var(--size-6);
		transition: background 0.2s ease-in-out;

		:hover {
			background: var(--gray-300);
		}

		svg {
			font-size: var(--size-24);
			color: var(--gray-700);
			margin-right: var(--size-12);
		}

		span {
			font-size: var(--size-20);
			font-weight: 700;
		}
	}

	h2 {
		font-size: var(--size-16);
		margin-top: var(--size-32);
		margin-bottom: var(--size-12);
		color: var(--gray-500);
		text-transform: uppercase;
		font-weight: 500;
	}

	.dot {
		display: flex;
		align-items: center;

		span {
			font-size: var(--size-16);
			font-weight: 600;
		}
	}
`;

export default function Sidebar({ tags, basePath }) {
	return (
		<StyledSidebar>
			<nav>
				<Link className="title" to={basePath}>
					<IoIosFiling />
					<span>All Notes</span>
				</Link>

				{tags.length > 0 && (
					<>
						<h2>Tags</h2>

						{tags
							.sort((one, two) => one.tag.localeCompare(two.tag))
							.map((item, index) => {
								return (
									<Link className="dot" to={item.path} key={index}>
										<Dot tag={item.tag} />
										<span>{item.tag}</span>
									</Link>
								);
							})}
					</>
				)}
			</nav>
		</StyledSidebar>
	);
}
