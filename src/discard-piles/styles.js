import styled from 'styled-components'
import whiteBg from '../assets/white.jpg'
import blueBg from '../assets/blue.jpg'
import redBg from '../assets/red.jpg'
import greenBg from '../assets/green.jpg'
import yellowBg from '../assets/yellow.jpg'

export const DiscardWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 1024px;
  width: 100%;
  justify-content: space-around;
  margin: 0 auto;
  padding: 8px 0;

  & h2 {
    font-size: 28px;
    font-weight: normal;
    transform: rotate(270deg);
    position: absolute;
    top: 68px;
    left: -60px;
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
