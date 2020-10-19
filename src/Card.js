import React from "react";
import styled from "styled-components";
import { renderIcon } from "./render-icon";

const Wrapper = styled.div`
  width: 100px;
  height: 150px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 4px;
  background-color: ${(props) => `${props.color}`};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Value = styled.div`
  border-radius: 2px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: bold;
  width: auto;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  position: absolute;
  ${(props) => `${props.isOpponent ? "bottom: 5px;" : "top: 5px;"}`}
  ${(props) => `${props.isOpponent ? "right: 5px;" : "left: 5px;"}`}
  ${(props) => `${props.isOpponent && "transform: rotate(180deg);"}`}
`;

const Icon = styled.div`
  color: white;
  position: absolute;
  ${(props) => `${props.isOpponent ? "bottom: 3px;" : "top: 3px;"}`}
  ${(props) => `${props.isOpponent ? "left: 5px;" : "right: 5px;"}`}
  ${(props) => `${props.isOpponent && "transform: rotate(180deg);"}`}
`;

const Button = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  margin: 4px;
`;

class Card extends React.Component {
  render() {
    const { color, isOpponent, value, ...props } = this.props;

    return (
      <Wrapper isOpponent={isOpponent} color={color}>
        <Value isOpponent={isOpponent}>{value}</Value>
        <Icon isOpponent={isOpponent}>{renderIcon(color)}</Icon>
        {renderButtons(props)}
      </Wrapper>
    );
  }
}

const renderButtons = (props) => {
  const {
    discardedCardID,
    handleDiscard,
    handleDraw,
    handlePlay,
    id,
    isCurrentPlayer,
    isDrawStage,
    location,
  } = props;

  if (location === "hand" && isCurrentPlayer && !isDrawStage) {
    return (
      <>
        <Button onClick={handlePlay}>Play</Button>
        <Button onClick={handleDiscard}>Discard</Button>
      </>
    );
  }
  if (
    isCurrentPlayer &&
    isDrawStage &&
    location === "discard" &&
    discardedCardID !== id
  ) {
    return <Button onClick={handleDraw}>Draw</Button>;
  }
  if (location === "") {
    return;
  }
};

export default Card;
