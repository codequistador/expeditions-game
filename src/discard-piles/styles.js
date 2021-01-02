import styled from 'styled-components'
import whiteBg from '../assets/white.jpg'
import blueBg from '../assets/blue.jpg'
import redBg from '../assets/red.jpg'
import greenBg from '../assets/green.jpg'
import yellowBg from '../assets/yellow.jpg'

export const DiscardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 1024px;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 16px;
  margin: 0 auto;
  padding: 16px 0;

  & span {
    font-size: 28px;
    transform: rotate(270deg);
    position: absolute;
    top: 70px;
    left: -100px;
  }
`

export const DiscardPile = styled.div`
  background: url(${(props) => {
      const bg = {
        blue: () => blueBg,
        red: () => redBg,
        white: () => whiteBg,
        green: () => greenBg,
        yellow: () => yellowBg,
      }
      return bg[props.color]()
    }})
    no-repeat center center;
  background-size: cover;
  border: 1px solid black;
  border-radius: 6px;
  width: 118px;
  height: 150px;
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
  left: 8px;
`
