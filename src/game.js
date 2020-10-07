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
  const G = {
    deck: [],
    cardsInDeck: [],
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

  G.cardsInDeck = G.deck.length;

  return G;
}

function playCard(G, ctx, id) {
  // G.hand[ctx.currentPlayer]--;
  // G.discard++;
  console.log("playCard called");
  ctx.events.setStage("draw");
}

function discard(G, ctx, id) {
  // for (var i = 0; i < G.discard.length; i++) {
  //   if (G.discard[i].color === id) {
  //     G.discard[i].cards.push();
  //   }
  // }
  console.log("Discard Called");
  ctx.events.setStage("draw");
}

function drawFromDeck(G, ctx, id) {
  console.log("DrawFromDeck Called");
  ctx.events.endTurn();
}

function drawFromDiscard(G, ctx, id) {
  // G.deck--;
  // G.hand[ctx.currentPlayer]++;
  console.log("DrawFromDiscard Called");
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
