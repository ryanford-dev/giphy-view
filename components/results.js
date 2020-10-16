import { useState } from 'react'
import styled from 'styled-components'
import ShrinkWrap from '@/components/shrinkwrap'

const MainContent = styled.div`
	width: 100%;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
	overflow-y: auto;

	@media (min-width: 48rem) {
		padding: 0;
	}

	& .info {
		margin: 2rem 0;
	}

	& h2 {
		font-size: 1.5rem;
		margin-bottom: 0.625rem;
	}
`;

const Pagination = styled.ul`
	width: 100%;
	margin: 2rem;
	display: flex;
	justify-content: center;

	& button {
		height: 2rem;
		width: 2rem;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0;
		border-radius: 50%;
		color: var(--foreground-color);
		font-weight: 700;
		background-color: var(--primary-color);
		cursor: pointer;

		&.active {
			background-color: var(--secondary-color);
			color: var(--background-color);
		}

		&:not(last-child) {
			margin-right: 0.5rem;
		}

		&:not(.active):hover, &:not(.active):focus {
			background-color: var(--primary-color-active);
		}
	}
`;

const ImgGallery = styled.ul`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	& li {
		width: calc((100% - 2rem) / 3);
	}

	& img {
		width: 100%;
		height; auto;
		margin-bottom: 1rem;
	}
`;

const ResultsPage = props => {
	const [ page, setPage ] = useState(1);
	const [ resultId, setResultId ] = useState("");

	const count = props?.data?.pagination?.count;

	if (props.data && resultId !== props.data.meta.response_id) {
		setPage(1);
		setResultId(props.data.meta.response_id);
	}

	return props.data ? (
		<MainContent>
			<ShrinkWrap maxWidth="56.25rem">
				<div className="info">
					<h2>Found {count} {`"${props.q}"`} gifs</h2>
					{(count > 0) ? (
						<p>Displaying {(page - 1) * 10} - {Math.min(count, page * 10)}</p>
					) : null}
				</div>
				<ImgGallery>
					{Array(10)
						.fill(0)
						.map((_, i) => {
							const img = props?.data?.data?.[(page - 1) * 10 + i];
							return img ? (
								<li>
									<img src={img.images.original.url} alt={img.title} />
								</li>
							) : null;
						})
						.filter(x => x)}
				</ImgGallery>
				<Pagination>
					{Array(Math.ceil(count / 10))
						.fill(0)
						.map((_, i) => {
							return (
								<button
									onClick={e => setPage(Number(e.target.textContent))}
									className={page === i + 1 ? "active" : undefined}
								>
									{i + 1}
								</button>)
						})
						.filter((_, i) => {
							// limit pagination to 5 items
							return true;
						})
					}
				</Pagination>
			</ShrinkWrap>
		</MainContent>
	) : (<MainContent>
		<p>Loading...</p>
	</MainContent>)
}

export default ResultsPage
