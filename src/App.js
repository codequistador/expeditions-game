import React from "react";
import { deck, getRandomCard } from "./constants/deck";
import Card from "./Card";

function App() {
  const card = getRandomCard(deck);
  return (
    <Card color={card.color} value={card.type !== "bet" ? card.value : "B"} />
  );
}

export default App;
