import React from 'react'
import { RenderIcon } from '../util'
import { DeckInfo, Icons, TheDeck, Wrapper } from './styles'
import { Button } from '../shared-styles'

class Deck extends React.Component {
  render() {
    const { cardsInDeck, handleDraw, isCurrentPlayer, isDrawStage } = this.props
    const plural = cardsInDeck === 1 ? '' : 's'
    const BlueIcon = RenderIcon('blue')
    const RedIcon = RenderIcon('red')
    const YellowIcon = RenderIcon('yellow')
    const WhiteIcon = RenderIcon('white')
    const GreenIcon = RenderIcon('green')
    return (
      <Wrapper>
        <DeckInfo>
          <h2>Deck</h2>
          <span>
            {cardsInDeck} card{plural}
          </span>
        </DeckInfo>
        <TheDeck cardsInDeck={cardsInDeck}>
          <h2>Lost Summits</h2>
          <Icons>
            <BlueIcon fontSize="inherit" />
            <RedIcon fontSize="inherit" />
            <YellowIcon fontSize="inherit" />
            <WhiteIcon fontSize="inherit" />
            <GreenIcon fontSize="inherit" />
          </Icons>
          {isDrawStage && isCurrentPlayer && (
            <Button onClick={handleDraw}>Draw</Button>
          )}
        </TheDeck>
      </Wrapper>
    )
  }
}

export default Deck
