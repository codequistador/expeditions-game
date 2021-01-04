import styled from 'styled-components'

export const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  height: 100vh;
`

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 170px;
  overflow-y: scroll;
`

export const ExpeditionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HandWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
