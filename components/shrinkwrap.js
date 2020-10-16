import styled from 'styled-components'

const StyledWrapper = styled.div`
	width: 100%;
	max-width: ${props => props.maxWidth || "75rem"};
	height: 100%;
	display: inherit;
	flex-direction: inherit;
	justify-content: inherit;
	align-items: inherit;
`;

const ShrinkWrap = props => (
	<StyledWrapper {...props}>
		{props.children}
	</StyledWrapper>
);

export default ShrinkWrap;
