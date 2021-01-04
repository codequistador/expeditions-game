import styled from 'styled-components'

export const ExpeditionsWrapper = styled.div`
  display: flex;
  max-width: 1024px;
  min-height: 190px;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto;
  position: relative;
`

export const Expedition = styled.div`
  border-radius: 6px;
  width: 180px;
  display: flex;
  flex-direction: ${(props) => `${props.isOpponent ? 'row-reverse' : 'row'}`};
  flex-wrap: ${(props) => `${props.isOpponent ? 'wrap-reverse' : 'wrap'}`};
  align-items: flex-start;
  margin: 8px;

  & > * {
    margin: ${(props) =>
      `${props.isOpponent ? '8px 0 0 -10px' : '0 -10px 8px 0'}`};
  }

  & > :nth-child(4n - 3) {
    transform: translateY(${(props) => `${props.isOpponent ? '-6px' : '6px'}`})
      rotate(-15deg);
  }
  & > :nth-child(4n - 2) {
    transform: rotate(-4deg);
  }
  & > :nth-child(4n - 1) {
    transform: rotate(4deg);
  }
  & > :nth-child(4n) {
    transform: translateY(${(props) => `${props.isOpponent ? '-6px' : '6px'}`})
      rotate(15deg);
  }
`

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Mountains of Christmas', cursive;
  font-size: 13em;
  letter-spacing: 0.1em;
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  ${(props) => `${props.isOpponent && 'transform: rotate(180deg)'}`};
`
