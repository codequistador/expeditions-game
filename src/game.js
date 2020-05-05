import { deck as DECK } from "./constants/deck";
import { PlayerView } from "boardgame.io/core";

export function getInitialHand(deck) {
  const hand = [];

  for (var i = 0; i < 8; i++) {
    const card = deck.pop();
    hand.push(card);
  }

  return hand;
}

export function getInitialState(ctx) {
  const G = {
    deck: [],
    cardsInDeck: [],
    discard: [],
    players: {},
  };

  G.deck = G.deck.concat(DECK);
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
