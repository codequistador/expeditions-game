import styled, { keyframes } from 'styled-components'
import { colors } from '../../shared-styles'

export const SetupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${colors.navy};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const MatchURLWrapper = styled.div`
  margin-bottom: 16px;
  position: absolute;
  top: 16px;

  h2 {
    color: ${colors.white};
    margin: 8px 0;
    text-align: center;
  }

  input {
    color: ${colors.white};
    background: ${colors.navy};
    min-width: 450px;
    text-align: center;
    font-size: 1.25rem;
    border: 1px solid ${colors.white};
    border-radius: 8px;
    padding: 8px 0;

    &:active,
    &:focus {
      outline: none;
    }
  }
`

export const PlayersWrapper = styled.div`
  background: ${colors.white};
  color: ${colors.navy};
  padding: 1rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  h1 {
    text-align: center;
  }
`

export const Waiting = styled.div`
  text-align: center;
  margin-top: 16px;
  font-weight: bold;
`

const blink = keyframes`
  50% {color: ${colors.white};}
`

export const Dot = styled.span`
  animation: 1s ${blink} infinite;
  &:nth-child(1) {
    animation-delay: 0ms;
  }
  &:nth-child(2) {
    animation-delay: 250ms;
  }
  &:nth-child(3) {
    animation-delay: 500ms;
  }
`
