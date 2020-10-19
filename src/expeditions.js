import React from "react";
import Card from "./card";
import styled from "styled-components";

const ExpeditionsWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`;

const Expedition = styled.div`
  border-radius: 6px;
  width: 100px;
  margin: 0 8px;
  padding: 8px 8px 125px 8px;
  display: flex;
  flex-direction: ${(props) =>
    `${props.isOpponent ? "column-reverse" : "column"}`};

  & > * {
    margin-bottom: -120px;
  }
`;

class Expeditions extends React.Component {
  render() {
    return (
      <ExpeditionsWrapper>
        {renderExpeditionDropZones(this.props)}
      </ExpeditionsWrapper>
    );
  }
}

const renderExpeditionDropZones = (props) =>
  props.expeditions.map((expedition, i) => {
    const { isOpponent } = props;
    return (
      <Expedition isOpponent={isOpponent} key={i}>
        {expedition.cards.map((card, i) => {
          return (
            <Card
              key={i}
              isOpponent={isOpponent}
              color={card.color}
              location="expedition"
              value={card.type !== "bet" ? card.value : "Bet"}
            />
          );
        })}
      </Expedition>
    );
  });

export default Expeditions;
