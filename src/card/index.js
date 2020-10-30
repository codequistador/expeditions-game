import React from "react";
import { renderIcon } from "../util";
import { Wrapper, Value, Icon } from "./styles";
import { Button } from "../shared-styles";

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
