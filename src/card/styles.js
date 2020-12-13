import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100px;
  height: 150px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${(props) => `${props.color}`};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Value = styled.div`
  border-radius: 2px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: bold;
  width: auto;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  position: absolute;
  ${(props) => `${props.isOpponent ? 'bottom: 5px;' : 'top: 5px;'}`}
  ${(props) => `${props.isOpponent ? 'right: 5px;' : 'left: 5px;'}`}
  ${(props) => `${props.isOpponent && 'transform: rotate(180deg);'}`}
`

export const Icon = styled.div`
  color: white;
  position: absolute;
  ${(props) => `${props.isOpponent ? 'bottom: 3px;' : 'top: 3px;'}`}
  ${(props) => `${props.isOpponent ? 'left: 5px;' : 'right: 5px;'}`}
  ${(props) => `${props.isOpponent && 'transform: rotate(180deg);'}`}
`
