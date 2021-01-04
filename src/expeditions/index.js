import React from 'react'
import Card from '../card'
import { ExpeditionsWrapper, Expedition, Label } from './styles'

class Expeditions extends React.Component {
  render() {
    const { isOpponent } = this.props
    return (
      <ExpeditionsWrapper>
        <Label isOpponent={isOpponent}>Expeditions</Label>
        {renderExpeditionDropZones(this.props)}
      </ExpeditionsWrapper>
    )
  }
}

const renderExpeditionDropZones = (props) =>
  props.expeditions.map((expedition, i) => {
    const { isOpponent } = props
    return (
      <Expedition isOpponent={isOpponent} key={i}>
        {expedition.cards.map((card, i) => {
          return (
            <Card
              key={i}
              isOpponent={isOpponent}
              color={card.color}
              location="expedition"
              value={card.type !== 'bet' ? card.value : '$$'}
              small
            />
          )
        })}
      </Expedition>
    )
  })

export default Expeditions
