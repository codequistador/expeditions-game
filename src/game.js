import { deck as LostSummitsDeck } from "./constants/deck";
import { PlayerView } from "boardgame.io/core";

export function getInitialHand(deck) {
  const hand = [];

  for (var i = 0; i < 8; i++) {
    const card = deck.pop();
    hand.push(card);
  }

  return hand;
}

const colorArray = [
  { color: "blue", cards: [] },
  { color: "red", cards: [] },
  { color: "yellow", cards: [] },
  { color: "white", cards: [] },
  { color: "green", cards: [] },
];

export function getInitialState(ctx) {
  let G = {
    deck: [],
    discard: colorArray,
    expeditions: {
      0: colorArray,
      1: colorArray,
    },
    players: {},
  };

  G.deck = G.deck.concat(LostSummitsDeck);
  G.deck = ctx.random.Shuffle(G.deck);

  for (let j = 0; j < ctx.numPlayers; j++) {
    G.players[j] = {
      score: 0,
      hand: getInitialHand(G.deck),
    };
  }

  return G;
}

function playCard(G, ctx, id, card) {
  const currentPlayer = G.players[ctx.currentPlayer];
  let playerHand = [...currentPlayer.hand];
  let expeditionPile = G.expeditions[ctx.currentPlayer].find(
    (e) => e.color === card.color
  );

  // Move card to expedition
  expeditionPile.cards.push(card);

  // Remove the card from hand
  playerHand.splice(id, 1);

  currentPlayer.hand = playerHand;

  ctx.events.setStage("draw");
}

function discard(G, ctx, id, card) {
  const currentPlayer = G.players[ctx.currentPlayer];
  let playerHand = [...currentPlayer.hand];
  let discardPile = G.discard.find((e) => e.color === card.color);

  // Move card to discard pile
  discardPile.cards.unshift(card);

  // Remove the card from hand
  playerHand.splice(id, 1);

  currentPlayer.hand = playerHand;

  ctx.events.setStage("draw");
}

function drawFromDeck(G, ctx) {
  const currentPlayer = G.players[ctx.currentPlayer];
  let playerHand = [...currentPlayer.hand];
  let deck = [...G.deck];

  // Draw a card
  const card = deck.pop();

  // Add card to hand
  playerHand.push(card);

  currentPlayer.hand = playerHand;
  G.deck = deck;

  ctx.events.endTurn();
}

function drawFromDiscard(G, ctx, id, card) {
  const currentPlayer = G.players[ctx.currentPlayer];
  let playerHand = [...currentPlayer.hand];

  // Remove card from discard pile
  G.discard[id].cards.shift();

  // Add card to hand
  playerHand.push(card);

  currentPlayer.hand = playerHand;

  ctx.events.endTurn();
}

const LostSummits = {
  setup: getInitialState,
  playerView: PlayerView.STRIP_SECRETS,
  moves: { playCard, discard },
  turn: {
    stages: {
      draw: {
        moves: { drawFromDeck, drawFromDiscard },
      },
    },
  },
};

export default LostSummits;
