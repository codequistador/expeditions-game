import styled from 'styled-components'
import { colors } from '../shared-styles'

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.navy};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const GameTitle = styled.h1`
  font-family: 'Mountains of Christmas', cursive;
  color: ${colors.white};
  font-size: 100px;
  margin-bottom: 40px;
  text-align: center;
`
