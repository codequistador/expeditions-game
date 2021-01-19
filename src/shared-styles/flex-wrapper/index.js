import styled from 'styled-components'

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => `${props.direction ? props.direction : 'row'}`};
  justify-content: ${(props) =>
    `${props.justify ? props.justify : 'flex-start'}`};
  align-items: ${(props) => `${props.align ? props.align : 'stretch'}`};
`

export default FlexWrapper
