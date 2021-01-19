import styled from 'styled-components'
import { colors } from '../../shared-styles'

export const PlayerWrapper = styled.div`
  position: relative;
  background: ${colors.greyBG};
  border-radius: 4px;
  padding: 8px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;

  span.you-or-opponent {
    position: absolute;
    top: -28px;
    left: 8px;
    font-size: 1.125rem;
    font-weight: bold;
  }

  form {
    margin: 0;
  }

  input {
    border: none;
    background: ${colors.greyBG};
    border-bottom: 2px solid ${colors.navy};
    padding: 4px;
    font-size: 1.5rem;
    color: ${colors.navy};
    width: 150px;

    &:focus {
      outline: none;
    }
  }
`

export const NameWrapper = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  span {
    margin-right: 4px;
  }
`
