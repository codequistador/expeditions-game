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
`;

const Value = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  font-size: 14px;
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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

class Card extends React.Component {
  render() {
    const isOpponent = this.props.isOpponent;
    return (
      <Wrapper isOpponent={isOpponent} color={this.props.color}>
        <Value isOpponent={isOpponent}>{this.props.value}</Value>
        <Icon isOpponent={isOpponent}>{renderIcon(this.props.color)}</Icon>
      </Wrapper>
    );
  }
}

export default Card;
