import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '../shared-styles'

function Rules() {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Button onClick={handleClickOpen} size="large">
        Read The Rules
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Rules of the Game</DialogTitle>
        <DialogContent dividers>
          <h3>Objective of the game</h3>
          <p>
            You are an expeditionist trying to succeed in up to five expeditions
            (represented by five colors) To make progress, you will lay the
            corresponding cards in ascending order. Bet cards will let you
            double, triple, quadruple your earnings. But beware! Starting an
            expedition costs 20 points and you may fail to cover your costs!
          </p>
          <h3>Player's turn</h3>
          <p>
            Every player starts with 8 cards in hand. A player's turn is very
            simple:
          </p>
          <ol>
            <li>Play a card</li>
            <li>Draw a card</li>
          </ol>
          <h3>How to play a card?</h3>
          <p>You can play a card in two ways:</p>
          <ul>
            <li>
              by laying it down on an expedition. The card will stay there for
              the rest of the game.
            </li>
            <li>by discarding it on the matching discard pile.</li>
          </ul>
          <p>The card may be picked later by either player.</p>
          <h3>How to lay a card?</h3>
          <p>
            Laying a card on an expedition must be done in ascending order.
            Cards do not need to be consecutive.
          </p>
          <h3>Discarding a card</h3>
          <p>
            If you do not want to lay a card on an expedition, you can discard
            one instead. There is one discard pile per color.
          </p>
          <h3>Drawing a card</h3>
          <p>Once you have played a card, you must draw another one:</p>
          <ul>
            <li>from the main deck</li>
            <li>
              from any discard pile You can not draw a card that you have
              discarded in the same turn!
            </li>
          </ul>
          <h3>Bet cards ($$)</h3>
          <p>
            Bet on the success of your expedition! Bet cards are represented by
            double dollar signs ($$). They must be laid before an expedition is
            started, that is before any value card on the same expedition. They
            will double, triple, quadruple your earnings or losses (for 1, 2, or
            3 bet cards).
          </p>
          <h3>End of the game</h3>
          <p>
            When a player draws the last card of the deck, the game ends
            immediately.
          </p>
          <h3>Scoring</h3>
          <p>
            Each expedition which has at least one card on it costs 20 points.
            This cost is substracted from the total value of the cards on that
            expedition. This total is then multiplied if there are bet cards on
            the expedition (x2, x3 or x4). If the expedition has at least 8
            cards, a (non multiplied) bonus of 20 points is given. The final
            score of a player is the total of points for the five expeditions.
            It can be negative!
          </p>
          <h3>Scoring example</h3>
          <p>
            Let us suppose that a player plays 2 bet cards, then 3 value cards
            (5, 9, 10) on an expedition. The total value of their cards is 24.
            The expedition costs 20 points which must be deducted. That leaves
            only 24-20 = 4 points. If there was no bet cards, the player would
            score these 4 points. But as he played two of them, the expedition
            value is tripled. So the player scores 4x3 = 12 points. Only 5 cards
            have been played, so a bonus of 20 points is not awarded here.
          </p>
          <h3>Tips</h3>
          <p>
            You do not need to start all expeditions. An expedition that is not
            started costs you nothing! Timing is very important. Do not hesitate
            to lose points to gain time! Watch out for the end of the game!
            Always keep an eye on your opponent!
          </p>
          <h3>Deck content</h3>
          <p>
            In each color, there are: ONE card for each value between 2 and 10
            THREE bet cards ($$)
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="large">
            Close Rules
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Rules
