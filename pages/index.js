import styled from 'styled-components'
import ShrinkWrap from '@/components/shrinkwrap'
import DemoImg from '@/img/undraw_creative_draft.svg'

const MainContent = styled.div`
	height: 100%;
	width: 100%;
	max-width: 56.25rem;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	flex-grow: 1;
	align-items: center;

	.content {
		width: 100%;
		height: auto;
		margin-bottom: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;

		@media (min-width: 48rem) {
			width: 50%;
			margin-bottom: 0;
			display: initial;
		}

		& h1 {
			font-size: 2rem;
		}
		& p {
			max-width: 20rem;
			margin-top: 1.5rem;
			line-height: 1.1;
		}
	}

	@media (min-width: 48rem) {
		height: calc(100vh - 4.0625rem);
		max-height: 48rem;
		padding: 0;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
`;

const ImgWrap = styled.div`
	width: 100%;
	height: auto;
	max-width: 20rem;

	@media (min-width: 48rem) {
		width: 50%;
	}
`;

const home = () => (
	<MainContent>
		<ShrinkWrap maxWidth="48rem">
			<div className="content">
				<h1>Search Giphy</h1>
				<p>Find the perfect gif!</p>
				<p>
					Dolor minima numquam saepe in quasi amet? Explicabo quam illo expedita totam atque Quis veritatis rerum nam accusantium consequuntur. Molestias corrupti suscipit repellat voluptatum vero Tempora aliquid eveniet dolores nostrum sint corrupti. Odit ea voluptatem a vitae qui doloremque Hic facilis nesciunt maiores at assumenda Quia aut quasi deserunt tempora?
				</p>
			</div>
			<ImgWrap>
				<DemoImg viewBox="0 0 858.081 750.015" width="100%" height="auto" />
			</ImgWrap>
		</ShrinkWrap>
	</MainContent>
)

export default home;
