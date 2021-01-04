import React from 'react'
import { RenderIcon } from '../util'
import { ButtonsWrapper, Wrapper, Value, Icon } from './styles'
import { Button } from '../shared-styles'

class Card extends React.Component {
  render() {
    const { color, isOpponent, small, value, ...props } = this.props
    const CardIcon = RenderIcon(color)

    return (
      <Wrapper isOpponent={isOpponent} color={color} small={small}>
        <Value isOpponent={isOpponent} small={small}>
          {value}
        </Value>
        <Icon isOpponent={isOpponent} small={small}>
          <CardIcon fontSize="inherit" />
        </Icon>
        <ButtonsWrapper>{renderButtons(props)}</ButtonsWrapper>
      </Wrapper>
    )
  }
}

const renderButtons = (props) => {
  const {
    discardedCardID,
    handleDiscard,
    handleDraw,
    handlePlay,
    id,
    isCurrentPlayer,
    isDrawStage,
    isGameOver,
    location,
  } = props

  if (location === 'hand' && isCurrentPlayer && !isDrawStage && !isGameOver) {
    return (
      <>
        <Button onClick={handlePlay}>Play</Button>
        <Button onClick={handleDiscard}>Discard</Button>
      </>
    )
  }
  if (
    isCurrentPlayer &&
    isDrawStage &&
    location === 'discard' &&
    discardedCardID !== id
  ) {
    return <Button onClick={handleDraw}>Draw</Button>
  }
  if (location === '') {
    return
  }
}

export default Card
