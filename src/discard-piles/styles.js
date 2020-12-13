import styled from 'styled-components'

export const DiscardWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`

export const DiscardPile = styled.div`
  box-style: border-box;
  background-color: white;
  border: 1px solid black;
  border-radius: 6px;
  width: 100px;
  height: 160px;
  display: inline-flex;
  margin: 0 8px;
  position: relative;
  padding: 40px 8px 0 8px;
`

export const Value = styled.div`
  border-radius: 2px;
  background-color: white;
  color: black;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 0 4px;
`

export const Icon = styled.div`
  color: black;
  position: absolute;
  top: 8px;
  right: 14px;
`
