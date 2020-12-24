import { deck as LostSummitsDeck } from './constants/deck'
import { calculateScores } from './util'
import { PlayerView } from 'boardgame.io/core'

const colorArray = [
  { color: 'blue', cards: [] },
  { color: 'red', cards: [] },
  { color: 'yellow', cards: [] },
  { color: 'white', cards: [] },
  { color: 'green', cards: [] },
]

const sortHand = (cards) => {
  cards.sort((a, b) => a.id - b.id)
}

const getInitialHand = (deck) => {
  const hand = []

  for (var i = 0; i < 8; i++) {
    const card = deck.pop()
    hand.push(card)
  }
  sortHand(hand)

  return hand
}

const getInitialState = (ctx) => {
  let G = {
    deck: [],
    discard: colorArray,
    expeditions: {
      0: colorArray,
      1: colorArray,
    },
    players: {},
    info: { discardedCard: [], lastMove: '', error: '' },
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
  G.info.error = ''
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]
  let expeditionPile = G.expeditions[ctx.currentPlayer].find(
    (e) => e.color === card.color
  )
  const expeditionCards = expeditionPile.cards
  const length = expeditionCards.length

  let validPlay = true

  // Only allow cards to be added in ascending order
  if (length > 0 && card.type !== 'bet') {
    validPlay = expeditionCards[length - 1].id < card.id
  }

  if (validPlay) {
    // Move card to expedition & remove the card from hand
    expeditionPile.cards.push(card)
    playerHand.splice(id, 1)

    // Update game state
    currentPlayer.hand = playerHand
    G.info.lastMove = `Player ${[ctx.currentPlayer].toString()} played a ${
      card.color
    } ${card.value !== null ? card.value : card.type}`

    ctx.events.setStage('draw')
  } else {
    G.info.error = 'Invalid Play: Cards must be added in ascending order.'
  }
}

const discard = (G, ctx, id, card) => {
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]
  let discardPile = G.discard.find((e) => e.color === card.color)

  // Move card to discard pile & log
  discardPile.cards.unshift(card)
  G.info.discardedCard.unshift(card)

  // Remove the card from hand
  playerHand.splice(id, 1)

  // Update game state
  currentPlayer.hand = playerHand
  G.info.lastMove = `Player ${[ctx.currentPlayer].toString()} discarded a ${
    card.color
  } ${card.value != null ? card.value : card.type}`

  ctx.events.setStage('draw')
}

const drawFromDeck = (G, ctx) => {
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]
  let deck = [...G.deck]

  // Draw a card & add to hand & sort
  const card = deck.pop()
  playerHand.push(card)
  sortHand(playerHand)

  // Update game state
  currentPlayer.hand = playerHand
  G.deck = deck
  G.info.discardedCard = []

  ctx.events.endTurn()
}

const drawFromDiscard = (G, ctx, id, card) => {
  const currentPlayer = G.players[ctx.currentPlayer]
  let playerHand = [...currentPlayer.hand]

  // Remove card from discard pile & add card to hand & sort
  G.discard[id].cards.shift()
  playerHand.push(card)
  sortHand(playerHand)

  // Update game state
  currentPlayer.hand = playerHand
  G.info.discardedCard = []

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
