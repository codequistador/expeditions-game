import styled from 'styled-components'
import { colors } from '../shared-styles'

export const SidebarWrapper = styled.div`
  padding: 16px;
  background: ${colors.navy};
  color: ${colors.white};
  position: relative;

  & h2,
  h3,
  h4 {
    color: ${colors.white};
  }
`

export const ScoresWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;

  button {
    margin-top: 16px;
  }
`

export const RulesButtonWrapper = styled.div`
  position: absolute;
  bottom: 16px;
`
