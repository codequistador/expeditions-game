import styled from 'styled-components'

export const ExpeditionsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const Expedition = styled.div`
  border-radius: 6px;
  width: 100px;
  margin: 0 8px;
  padding: 0 8px 108px 8px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    `${props.isOpponent ? 'column' : 'column-reverse'}`};

  & > * {
    margin-bottom: -108px;
  }
`
