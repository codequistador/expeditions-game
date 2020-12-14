import { deck as LostSummitsDeck } from './constants/deck'
import { calculateScores } from './util'
import { INVALID_MOVE, PlayerView } from 'boardgame.io/core'

const colorArray = [
  { color: 'blue', cards: [] },
  { color: 'red', cards: [] },
  { color: 'yellow', cards: [] },
  { color: 'white', cards: [] },
  { color: 'green', cards: [] },
]

const getInitialHand = (deck) => {
  const hand = []

  for (var i = 0; i < 8; i++) {
    const card = deck.pop()
    hand.push(card)
  }

  return hand
}

const getInitialState = (ctx) => {
  let G = {
    deck: [],
    discard: colorArray,
    discardedCard: [],
    expeditions: {
      0: colorArray,
      1: colorArray,
    },
    players: {},
    lastMove: '',
  }

  G.deck = G.deck.concat(LostSummitsDeck)
  G.deck = ctx.random.Shuffle(G.deck)

  for (let j = 0; j < ctx.numPlayers; j++) {
    G.players[j] = {
      hand: getInitialHand(G.deck),
    }
  }

  return G
}

const playCard = (G, ctx, id, card) => {
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]
  let expeditionPile = G.expeditions[ctx.currentPlayer].find(
    (e) => e.color === card.color
  )
  const expeditionCards = expeditionPile.cards
  const length = expeditionCards.length

  // Only allow cards to be added in ascending order
  if (length > 0 && card.type !== 'bet') {
    if (expeditionCards[length - 1].id > card.id) {
      return INVALID_MOVE
    }
  }

  // Move card to expedition & remove the card from hand
  expeditionPile.cards.push(card)
  playerHand.splice(id, 1)

  // Update game state
  currentPlayer.hand = playerHand
  G.lastMove = `Player ${[ctx.currentPlayer].toString()} played a ${
    card.color
  } ${card.value != null ? card.value : card.type}`

  ctx.events.setStage('draw')
}

const discard = (G, ctx, id, card) => {
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]
  let discardPile = G.discard.find((e) => e.color === card.color)

  // Move card to discard pile & log
  discardPile.cards.unshift(card)
  G.discardedCard.unshift(card)

  // Remove the card from hand
  playerHand.splice(id, 1)

  // Update game state
  currentPlayer.hand = playerHand
  G.lastMove = `Player ${[ctx.currentPlayer].toString()} discarded a ${
    card.color
  } ${card.value != null ? card.value : card.type}`

  ctx.events.setStage('draw')
}

const drawFromDeck = (G, ctx) => {
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]
  let deck = [...G.deck]

  // Draw a card & add to hand
  const card = deck.pop()
  playerHand.push(card)

  // Update game state
  currentPlayer.hand = playerHand
  G.deck = deck
  G.discardedCard = []

  ctx.events.endTurn()
}

const drawFromDiscard = (G, ctx, id, card) => {
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]

  // Remove card from discard pile & add card to hand
  G.discard[id].cards.shift()
  playerHand.push(card)

  // Update game state
  currentPlayer.hand = playerHand
  G.discardedCard = []

  ctx.events.endTurn()
}

const endGame = (G) => {
  if (G.deck.length <= 0) {
    return calculateScores(G)
  }
}

const LostSummits = {
  setup: getInitialState,
  playerView: PlayerView.STRIP_SECRETS,
  moves: { playCard, discard },
  endIf: endGame,
  turn: {
    stages: {
      draw: {
        moves: { drawFromDeck, drawFromDiscard },
      },
    },
  },
}

export default LostSummits
