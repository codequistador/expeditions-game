import styled from 'styled-components'

export const CardsWrapper = styled.div`
  display: flex;
  position: relative;

  & > div {
    margin: 0 4px;
  }

  & h2 {
    position: absolute;
    top: -40px;
  }
`
