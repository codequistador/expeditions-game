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
    hikes: {
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

function PlayCard(G, ctx, id) {
  G.hand[ctx.currentPlayer]--;
  G.discard++;
}

function DrawCard(G, ctx, id) {
  G.deck--;
  G.hand[ctx.currentPlayer]++;
  ctx.events.endTurn();
}

const LostSummits = {
  setup: getInitialState,
  playerView: PlayerView.STRIP_SECRETS,
  turn: {
    stages: {
      play: {
        moves: { PlayCard },
        next: "discard",
      },
      discard: {
        moves: { DrawCard },
      },
    },
  },
};

export default LostSummits;
