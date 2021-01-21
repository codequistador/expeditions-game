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
  margin-bottom: 20px;
  text-align: center;
`

export const GamesWrapper = styled.div`
  background: ${colors.white};
  color: ${colors.navy};
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  h2 {
    text-align: center;
    margin-bottom: 16px;
  }

  h3 {
    margin: 0;
  }

  div.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const Game = styled.div`
  width: 320px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 8px 0;

  p {
    font-size: 1.125rem;
    margin: 0;
    display: flex;
    align-items: center;
  }
`
