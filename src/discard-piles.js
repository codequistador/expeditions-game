import React from "react";
import styled from "styled-components";

const DiscardPile = styled.div`
  background-color: lightblue;
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 8px;
`;

class DiscardPiles extends React.Component {
  render() {
    return this.props.piles.map((pile, i) => {
      return <DiscardPile key={i}>{pile.color}</DiscardPile>;
    });
  }
}

export default DiscardPiles;
