import React from 'react'
import { Wrapper } from './styles'
import { Button } from '../shared-styles'

class Deck extends React.Component {
  render() {
    const { cardsInDeck, handleDraw, isCurrentPlayer, isDrawStage } = this.props
    const cardOrCards = cardsInDeck === 1 ? 'card' : 'cards'
    return (
      <Wrapper cardsInDeck={cardsInDeck}>
        {cardsInDeck} {cardOrCards} remaining
        {isDrawStage && isCurrentPlayer && (
          <Button onClick={handleDraw}>Draw From Deck</Button>
        )}
      </Wrapper>
    )
  }
}

export default Deck
