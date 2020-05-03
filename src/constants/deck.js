export const deck = [
  {
    color: "blue",
    type: "bet",
    value: null,
  },
  {
    color: "blue",
    type: "bet",
    value: null,
  },
  {
    color: "blue",
    type: "bet",
    value: null,
  },
  {
    color: "blue",
    type: "number",
    value: 2,
  },
  {
    color: "blue",
    type: "number",
    value: 3,
  },
  {
    color: "blue",
    type: "number",
    value: 4,
  },
  {
    color: "blue",
    type: "number",
    value: 5,
  },
  {
    color: "blue",
    type: "number",
    value: 6,
  },
  {
    color: "blue",
    type: "number",
    value: 7,
  },
  {
    color: "blue",
    type: "number",
    value: 8,
  },
  {
    color: "blue",
    type: "number",
    value: 9,
  },
  {
    color: "blue",
    type: "number",
    value: 10,
  },
  {
    color: "red",
    type: "bet",
    value: null,
  },
  {
    color: "red",
    type: "bet",
    value: null,
  },
  {
    color: "red",
    type: "bet",
    value: null,
  },
  {
    color: "red",
    type: "number",
    value: 2,
  },
  {
    color: "red",
    type: "number",
    value: 3,
  },
  {
    color: "red",
    type: "number",
    value: 4,
  },
  {
    color: "red",
    type: "number",
    value: 5,
  },
  {
    color: "red",
    type: "number",
    value: 6,
  },
  {
    color: "red",
    type: "number",
    value: 7,
  },
  {
    color: "red",
    type: "number",
    value: 8,
  },
  {
    color: "red",
    type: "number",
    value: 9,
  },
  {
    color: "red",
    type: "number",
    value: 10,
  },
  {
    color: "yellow",
    type: "bet",
    value: null,
  },
  {
    color: "yellow",
    type: "bet",
    value: null,
  },
  {
    color: "yellow",
    type: "bet",
    value: null,
  },
  {
    color: "yellow",
    type: "number",
    value: 2,
  },
  {
    color: "yellow",
    type: "number",
    value: 3,
  },
  {
    color: "yellow",
    type: "number",
    value: 4,
  },
  {
    color: "yellow",
    type: "number",
    value: 5,
  },
  {
    color: "yellow",
    type: "number",
    value: 6,
  },
  {
    color: "yellow",
    type: "number",
    value: 7,
  },
  {
    color: "yellow",
    type: "number",
    value: 8,
  },
  {
    color: "yellow",
    type: "number",
    value: 9,
  },
  {
    color: "yellow",
    type: "number",
    value: 10,
  },
  {
    color: "white",
    type: "bet",
    value: null,
  },
  {
    color: "white",
    type: "bet",
    value: null,
  },
  {
    color: "white",
    type: "bet",
    value: null,
  },
  {
    color: "white",
    type: "number",
    value: 2,
  },
  {
    color: "white",
    type: "number",
    value: 3,
  },
  {
    color: "white",
    type: "number",
    value: 4,
  },
  {
    color: "white",
    type: "number",
    value: 5,
  },
  {
    color: "white",
    type: "number",
    value: 6,
  },
  {
    color: "white",
    type: "number",
    value: 7,
  },
  {
    color: "white",
    type: "number",
    value: 8,
  },
  {
    color: "white",
    type: "number",
    value: 9,
  },
  {
    color: "white",
    type: "number",
    value: 10,
  },
  {
    color: "green",
    type: "bet",
    value: null,
  },
  {
    color: "green",
    type: "bet",
    value: null,
  },
  {
    color: "green",
    type: "bet",
    value: null,
  },
  {
    color: "green",
    type: "number",
    value: 2,
  },
  {
    color: "green",
    type: "number",
    value: 3,
  },
  {
    color: "green",
    type: "number",
    value: 4,
  },
  {
    color: "green",
    type: "number",
    value: 5,
  },
  {
    color: "green",
    type: "number",
    value: 6,
  },
  {
    color: "green",
    type: "number",
    value: 7,
  },
  {
    color: "green",
    type: "number",
    value: 8,
  },
  {
    color: "green",
    type: "number",
    value: 9,
  },
  {
    color: "green",
    type: "number",
    value: 10,
  },
];

// ToDo should this remove the card from the deck?
export const getRandomCard = (deck) =>
  deck[Math.floor(Math.random() * deck.length)];

// ToDo should pull from remaining deck... not full deck
export const getInitialHand = (deck) => {
  const hand = [];

  for (var i = 0; i < 8; i++) {
    hand.push(getRandomCard(deck));
  }

  return hand;
};
