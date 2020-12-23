import React from 'react'
import Card from '../card'
import { RenderIcon } from '../util'
import { DiscardWrapper, DiscardPile, Value, Icon } from './styles'

class DiscardPiles extends React.Component {
  render() {
    return <DiscardWrapper>{renderDiscardedCards(this.props)}</DiscardWrapper>
  }
}

const renderDiscardedCards = (props) =>
  props.piles.map((pile, i) => {
    const renderTopCard = () => {
      if (pile.cards.length > 0) {
        const topCard = pile.cards[0]
        const {
          handleDraw,
          discardedCardID,
          isCurrentPlayer,
          isDrawStage,
        } = props
        return (
          <Card
            key={i}
            id={topCard.id}
            color={topCard.color}
            location='discard'
            value={topCard.type !== 'bet' ? topCard.value : 'Bet'}
            handleDraw={() => handleDraw(i, topCard)}
            discardedCardID={discardedCardID}
            isCurrentPlayer={isCurrentPlayer}
            isDrawStage={isDrawStage}
          />
        )
      }
    }
    return (
      <DiscardPile key={i} color={pile.color}>
        <Value>{pile.color}</Value>
        <Icon>{RenderIcon(pile.color)}</Icon>
        {renderTopCard()}
      </DiscardPile>
    )
  })

export default DiscardPiles
