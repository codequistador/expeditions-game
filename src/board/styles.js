import styled from 'styled-components'
import { colors } from '../shared-styles'

export const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: 350px auto;
  height: 100vh;
`

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 190px;
  overflow-y: scroll;
`

export const ExpeditionsWrapper = styled.div``

export const Sidebar = styled.div`
  background: ${colors.navy};
  color: ${colors.white};
`

export const HandWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
