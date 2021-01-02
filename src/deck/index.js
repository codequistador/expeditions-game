import React from 'react'
import { DeckInfo, TheDeck, Wrapper } from './styles'
import { Button } from '../shared-styles'

class Deck extends React.Component {
  render() {
    const { cardsInDeck, handleDraw, isCurrentPlayer, isDrawStage } = this.props
    const plural = cardsInDeck === 1 ? '' : 's'
    return (
      <Wrapper>
        <DeckInfo>
          Deck: {cardsInDeck} card{plural} remaining
        </DeckInfo>
        <TheDeck cardsInDeck={cardsInDeck}>
          {isDrawStage && isCurrentPlayer && (
            <Button onClick={handleDraw}>Draw From Deck</Button>
          )}
        </TheDeck>
      </Wrapper>
    )
  }
}

export default Deck
