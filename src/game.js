import { deck as DECK } from "./constants/deck";

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

const LostSummits = {
  setup: getInitialState,
};

export default LostSummits;
