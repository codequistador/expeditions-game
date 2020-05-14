import React from "react";
import Card from "./card";
import styled from "styled-components";

const HikesWrapper = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
`;

const Hike = styled.div`
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

class Hikes extends React.Component {
  render() {
    return <HikesWrapper>{renderHikeDropZones(this.props)}</HikesWrapper>;
  }
}

const renderHikeDropZones = (props) =>
  props.hikes.map((hike, i) => {
    return (
      <Hike isOpponent={props.isOpponent}>
        {hike.cards.map((card, i) => {
          return (
            <Card
              key={i}
              isOpponent={props.isOpponent}
              color={card.color}
              value={card.type !== "bet" ? card.value : "B"}
            />
          );
        })}
      </Hike>
    );
  });

export default Hikes;
