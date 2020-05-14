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
  {
    color: "blue",
    cards: [
      {
        color: "blue",
        type: "bet",
        value: null,
        id: 2,
      },
      {
        color: "blue",
        type: "bet",
        value: null,
        id: 3,
      },
      {
        color: "blue",
        type: "number",
        value: 2,
        id: 4,
      },
    ],
  },
  {
    color: "red",
    cards: [
      {
        color: "red",
        type: "bet",
        value: null,
        id: 13,
      },
      {
        color: "red",
        type: "bet",
        value: null,
        id: 14,
      },
      {
        color: "red",
        type: "bet",
        value: null,
        id: 15,
      },
      {
        color: "red",
        type: "number",
        value: 2,
        id: 16,
      },
      {
        color: "red",
        type: "number",
        value: 3,
        id: 17,
      },
      {
        color: "red",
        type: "number",
        value: 4,
        id: 18,
      },
      {
        color: "red",
        type: "number",
        value: 5,
        id: 19,
      },
      {
        color: "red",
        type: "number",
        value: 6,
        id: 20,
      },
      {
        color: "red",
        type: "number",
        value: 7,
        id: 21,
      },
      {
        color: "red",
        type: "number",
        value: 8,
        id: 22,
      },
      {
        color: "red",
        type: "number",
        value: 9,
        id: 23,
      },
      {
        color: "red",
        type: "number",
        value: 10,
        id: 24,
      },
    ],
  },
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

// function PlayCard(G, ctx, id) {
//   G.hand[ctx.currentPlayer]--;
//   G.discard++;
// }

// function DrawCard(G, ctx, id) {
//   G.deck--;
//   G.hand[ctx.currentPlayer]++;
//   ctx.events.endTurn();
// }

const LostSummits = {
  setup: getInitialState,
  playerView: PlayerView.STRIP_SECRETS,
  // turn: {
  //   stages: {
  //     play: {
  //       moves: { PlayCard },
  //       next: "discard",
  //     },
  //     discard: {
  //       moves: { DrawCard },
  //     },
  //   },
  // },
};

export default LostSummits;
