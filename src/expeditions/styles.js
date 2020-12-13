import styled from 'styled-components'

export const ExpeditionsWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`

export const Expedition = styled.div`
  border-radius: 6px;
  width: 100px;
  margin: 0 8px;
  padding: 8px 8px 125px 8px;
  display: flex;
  flex-direction: ${(props) =>
    `${props.isOpponent ? 'column-reverse' : 'column'}`};

  & > * {
    margin-bottom: -120px;
  }
`
