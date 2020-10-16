import styled from 'styled-components'
import ShrinkWrap from '@/components/shrinkwrap'

const StyledFootnote = styled.footer`
	height: 1rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& small {
		line-height: 1rem;
		font-size: 0.75rem;
	}
`;

const AttributionNotice = props => (
	<StyledFootnote>
		<ShrinkWrap>
			<small>Thanks to Michal from toptal.com for the background</small>
		</ShrinkWrap>
	</StyledFootnote>
);

export default AttributionNotice;
