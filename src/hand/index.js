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
      myName,
    } = this.props
    return (
      <CardsWrapper>
        <h2>Your Hand</h2>
        {renderCards(
          cards,
          isCurrentPlayer,
          isDrawStage,
          isGameOver,
          moves,
          myName
        )}
      </CardsWrapper>
    )
  }
}

const renderCards = (
  cards,
  isCurrentPlayer,
  isDrawStage,
  isGameOver,
  moves,
  myName
) => {
  return cards.map((card, i) => {
    return (
      <Card
        key={i}
        id={card.id}
        color={card.color}
        location="hand"
        value={card.type !== 'bet' ? card.value : '$$'}
        handlePlay={() => moves.playCard(i, card, myName)}
        handleDiscard={() => moves.discard(i, card, myName)}
        isCurrentPlayer={isCurrentPlayer}
        isDrawStage={isDrawStage}
        isGameOver={isGameOver}
      />
    )
  })
}

export default Hand
