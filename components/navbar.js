import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import SearchIcon from '@/img/search.svg'
import ShrinkWrap from '@/components/shrinkwrap'

const NavbarNav = styled.nav`
	height: 9rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: var(--accent-color);
	& a {
		height: 3rem;
		display: flex;
		align-items: center;
		padding: 0.875rem 1.25rem;
		font-size: 1.25rem;
		color: var(--background-color);
		text-decoration: none;
		font-weight: 700;
		cursor: pointer;
		&:hover, &:focus {
			color: var(--secondary-color);
			text-shadow: -0.0625rem -0.0625rem 0 var(--background-color), 0.0625rem -0.0625rem 0 var(--background-color), -0.0625rem 0.0625rem 0 var(--background-color), 0.0625rem 0.0625rem 0 var(--background-color);
		}
	}
	@media (min-width: 768px) {
		height: 3rem;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

const NavSearch = styled.form`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	& input {
		height: 3rem;
		width: 100%;
		padding: 0 1rem;
		border: 0;
	}
	& button {
		height: 3rem;
		width: 100%;
		display: inline-block;
		padding: 0 1rem;
		background-color: var(--primary-color);
		border: 0;
		cursor: pointer;
		&:hover, &:focus {
			background-color: var(--primary-color-active);
		}
	}
	& svg {
		vertical-align: middle;
	}
	@media (min-width: 768px) {
		width: unset;
		flex-direction: row;
		& input {
			height: 100%;
			min-width: 30rem;
		}
		& button {
			height: 100%;
			width: unset;
		}
	}
`;

const Navbar = props => {
	const router = useRouter();
	const [query, setQuery] = useState("");
	const [data, setData] = useState({});

	return (
		<NavbarNav props={props}>
			<ShrinkWrap>
				<Link href="/">
					<a>{"★ " + props.title + " ★"}</a>
				</Link>
				<NavSearch
					action="#"
				>
					<input
						placeholder="sensible chuckle"
						aria-label="search"
						onChange={e => setQuery(e.target.value)}
					/>
					<button
						onClick={async e => {
							e.preventDefault();
							if (!query) return;
							// fake request
							const result = await import('../public/sample_data.json')
							setData(result.data);
							router.push('/gifs/' + query);
						}}
					>
						<SearchIcon
							fill="#e7e7e7"
							aria-label="submit"
						/>
					</button>
				</NavSearch>
			</ShrinkWrap>
		</NavbarNav>
	);
}

export default Navbar;
