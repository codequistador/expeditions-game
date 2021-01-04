import styled from 'styled-components'
import { colors } from '../shared-styles'

export const Wrapper = styled.div`
  width: ${(props) => `${props.small ? '50px' : '100px'}`};
  height: ${(props) => `${props.small ? '50px' : '100px'}`};
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${(props) => colors[`${props.color}`]};
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Value = styled.div`
  color: black;
  font-family: 'Mountains of Christmas', cursive;
  font-size: ${(props) => `${props.small ? '42px' : '32px'}`};
  font-weight: bold;
  width: auto;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  position: ${(props) => `${props.small ? 'initial' : 'absolute'}`};
  ${(props) => `${props.isOpponent ? 'bottom: 8px;' : 'top: 8px;'}`}
  ${(props) => `${props.isOpponent ? 'right: 5px;' : 'left: 5px;'}`}
  ${(props) => `${props.isOpponent && 'transform: rotate(180deg);'}`}
`

export const Icon = styled.div`
  color: black;
  opacity: ${(props) => `${props.small ? '0.2' : '0.5'}`};
  width: ${(props) => `${props.small ? '50px' : '60px'}`};
  font-size: ${(props) => `${props.small ? '50px' : '60px'}`};
  position: absolute;
  z-index: 0;

  ${(props) => `${props.isOpponent ? 'bottom: 16px;' : 'top: 16px;'}`}
  ${(props) => {
    if (props.small && !props.isOpponent) {
      return `top: -5px;`
    } else if (props.small && props.isOpponent) {
      return `bottom: -5px;`
    }
  }}
  ${(props) => `${props.isOpponent && 'transform: rotate(180deg);'}`}
`

export const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 4px;
  width: 100%;
  z-index: 10;
  text-align: center;
`
