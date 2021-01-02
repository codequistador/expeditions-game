import React from 'react'
import Card from '../card'
import { RenderIcon } from '../util'
import { DiscardWrapper, DiscardPile, Icon } from './styles'

class DiscardPiles extends React.Component {
  render() {
    return (
      <DiscardWrapper>
        <span>Discard piles</span>
        {renderDiscardedCards(this.props)}
      </DiscardWrapper>
    )
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
            location="discard"
            value={topCard.type !== 'bet' ? topCard.value : '$$'}
            handleDraw={() => handleDraw(i, topCard)}
            discardedCardID={discardedCardID}
            isCurrentPlayer={isCurrentPlayer}
            isDrawStage={isDrawStage}
          />
        )
      }
    }
    const CardIcon = RenderIcon(pile.color)
    return (
      <DiscardPile key={i} color={pile.color}>
        <Icon>
          <CardIcon />
        </Icon>
        {renderTopCard()}
      </DiscardPile>
    )
  })

export default DiscardPiles
