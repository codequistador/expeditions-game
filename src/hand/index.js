import React from 'react'
import Card from '../card'
import { CardsWrapper } from './styles'

class Hand extends React.Component {
  render() {
    const {
      cards,
      isCurrentPlayer,
      isDrawStage,
      isGameOver,
      moves,
    } = this.props
    return (
      <CardsWrapper>
        {renderCards(cards, isCurrentPlayer, isDrawStage, isGameOver, moves)}
      </CardsWrapper>
    )
  }
}

const renderCards = (
  cards,
  isCurrentPlayer,
  isDrawStage,
  isGameOver,
  moves
) => {
  return cards.map((card, i) => {
    return (
      <Card
        key={i}
        id={card.id}
        color={card.color}
        location="hand"
        value={card.type !== 'bet' ? card.value : '$$'}
        handlePlay={() => moves.playCard(i, card)}
        handleDiscard={() => moves.discard(i, card)}
        isCurrentPlayer={isCurrentPlayer}
        isDrawStage={isDrawStage}
        isGameOver={isGameOver}
      />
    )
  })
}

export default Hand
